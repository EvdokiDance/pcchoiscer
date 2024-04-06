import { memo, useState, useEffect } from "react";
import styles from "./BuildList.module.css";

import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";

import Button from "../Button/Button";

import { useNavigate } from "react-router-dom";

import { currencyToRub } from "../../helpers/currencyToRub";

import { BuildType } from "../../pages/pageBuild/PageBuildProps";
import { saveBuild } from "../../api/api";
import { useAppSelector } from "../../hooks/useRedux";
import BuildContainer from "./BuildContainer/BuildContainer";
import cn from 'classnames'


type Props = {
  dataBuild: BuildType[];
  initialBuild: BuildType[];
  handleDeleteItem: (category: string, index: number) => void;
  setStorageBuild: (build: BuildType[]) => void;
};

function BuildList({
  dataBuild,
  setStorageBuild,
  initialBuild,
  handleDeleteItem,
}: Props) {
  const user = useAppSelector((state) => state.auth.user);

  const [totalPrice, setTotalPrice] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleTotalPrice = (build: BuildType[]) => {
    let initialPrice = 0;

    build.forEach((buildItem) =>
      buildItem.components.forEach(({ price }) => (initialPrice += price))
    );

    return initialPrice;
  };

  const handleSaveBtn = (build: BuildType[]) => {
    const isComponents = build.filter(
      (buildItem) => buildItem.components.length > 0
    );

    let size = isComponents.length;

    let storageComponents = [];

    isComponents.map((component) =>
      component.category === "ssd" || component.category === "hdd"
        ? storageComponents.push(component)
        : component
    );

    if (storageComponents.length === 2) {
      size--;
    }

    if (size >= 8) {
      setIsDisabled(false);
      return;
    }

    setIsDisabled(true);
  };

  useEffect(() => {
    handleSaveBtn(dataBuild);
    const totalPrice = handleTotalPrice(dataBuild);
    setTotalPrice(totalPrice);
  }, [dataBuild]);

  const handleSaveBuild = async () => {
    await saveBuild(dataBuild, totalPrice, user.id);

    localStorage.setItem("build", JSON.stringify(initialBuild));
    console.log(initialBuild);
    
    setStorageBuild(initialBuild);
  };

  const navigate = useNavigate();

  return (
    <>
      <ul className="grid gap-6 mb-4">
      {dataBuild.map((buildItem, index) => (
        <li key={index} className="border-t border-[var(--border-color)] first:border-none">
          <BuildContainer
            handleDeleteItem={handleDeleteItem}
            buildItem={buildItem}
          />
          {!buildItem.isHidden && (
            <div className="flex gap-5 justify-between py-3">
              <h4 className="">{buildItem.name}</h4>
              <Button
                className="self-center w-36 shrink-0 h"
                disabled={buildItem.isDisabled}
                onClick={() => navigate(`/hardware/${buildItem.category}/page/1`)}
              >
                Выбор
              </Button>
            </div>
          )}
        </li>
      ))}
    </ul>
    <div className="flex gap-5 mt-2 h-10 justify-center">
        <Button
          className="block py-3 "
          disabled={isDisabled}
          onClick={handleSaveBuild}
        >
          <SaveIcon sx={{ fontSize: 30 }} /> Сохранить
        </Button>
        <span className={cn(styles.totalPrice, 'self-center')}>
          ВСЕГО: {currencyToRub(totalPrice)}
        </span>
      </div>
    </>
  );
}

export default BuildList;
