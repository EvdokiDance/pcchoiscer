import { memo, useState, useEffect } from "react";
import styles from "./BuildList.module.css";

import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";

import Button from "../Button/Button";

import { useNavigate } from "react-router-dom";

import { currencyToRub } from "../../helpers/currencyToRub";

import { BuildType } from "../../pages/PageBuild/PageBuildProps";
import { saveBuild } from "../../api/api";
import { useAppSelector } from "../../hooks/useRedux";
import BuildContainer from "./BuildContainer/BuildContainer";
import './BuildList.css'


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
    setStorageBuild(initialBuild);
  };

  const navigate = useNavigate();

  return (
    <ul>
      {dataBuild.map((buildItem, index) => (
        <li key={index} className={styles.partsWrapper}>
          <BuildContainer
            handleDeleteItem={handleDeleteItem}
            className={styles.selectionWrapper}
            buildItem={buildItem}
          />
          {!buildItem.isHidden && (
            <div className={styles.bottomWrapper}>
              <h4 className={styles.title}>{buildItem.name}</h4>
              <Button
                disabled={buildItem.isDisabled}
                onClick={() => navigate(`/${buildItem.category}/1`)}
                className={styles.partBtn}
              >
                <AddIcon sx={{ fontSize: 30 }} />
                Выбор
              </Button>
            </div>
          )}
        </li>
      ))}
      <div className={styles.bottomWrapper}>
        <Button
          disabled={isDisabled}
          className={styles.btnSave}
          onClick={() => handleSaveBuild()}
        >
          <SaveIcon sx={{ fontSize: 30 }} /> Сохранить
        </Button>
        <span className={styles.totalPrice}>
          ВСЕГО: {currencyToRub(totalPrice)}
        </span>
      </div>
    </ul>
  );
}

const memoBuildList = memo(BuildList);

export default memoBuildList;
