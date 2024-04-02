import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import styles from "./PageSelection.module.css";

import cn from "classnames";

import { getAllPartnerArticles, getData } from "../../api/api";

import { PartType } from "../../components/Part/Props";

import { PartList, Spinner, Pagination, Filter } from "../../components";
import { usePagination } from "../../hooks/usePagination";

import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";

import {
  setFiltredParts,
  setParts,
  setPartsPerPage,
} from "../../store/reducers/partsReducer";
import { setHeaderName } from "../../store/reducers/headerReducer";
import Container from "../../components/Container/Container";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { ArticleType } from "../../components/AdminArticleItem/AdminArticle";
import { error } from "console";
import { PartnerArticle } from "../../components/PartnerArticle/PartnerArticle";

const PageSelection = () => {
  const hardwares = {
    processors: "Процессор",
    coolers: "Кулер",
    moutherboards: "Материнская плата",
    ram: "Оперативная память",
    ssd: "SSD",
    hdd: "HDD",
    videocards: "Видеокарта",
    cases: "Корпус",
    power: "Блок питания",
  };

  const [spinner, setSpinner] = useState(true);



  const { hardware = "" } = useParams();

  const dispatch = useAppDispatch();

  const filtredParts = useAppSelector((state) => state.partsData.filtredParts);

  useEffect(() => {
    dispatch(setHeaderName(hardwares[hardware]));
    (async () => {
      const partsItems = await getData(hardware);
      dispatch(setParts(partsItems));
      dispatch(setFiltredParts(partsItems));
    })().finally(() => setSpinner(false)).catch((error) => console.log(error))
  }, []);

  const {
    handleNextPageClick,
    handlePrevPageClick,
    pageN,
    totalPageCount,
    setPageN,
    setTotalPageCount,
    getTotalPageCount,
  } = usePagination();

  useEffect(() => {
    if (filtredParts.length === 0) {
      setTotalPageCount(1);
    } else {
      setTotalPageCount(getTotalPageCount(filtredParts.length));
    }

    dispatch(setPartsPerPage(filtredParts.slice(0, 25)));
    setPageN(1);
  }, [filtredParts]);

  return (
    <>
    <div className="py-5">
      <PartnerArticle/>
      <Container>
        {spinner ? (
          <Spinner />
        ) : (
          <>
            <Filter className={styles.filter} />
            <PartList className={styles.partList} />
            <Pagination
              className={cn(styles.pagination)}
              onNextPageClick={handleNextPageClick}
              onPrevPageClick={handlePrevPageClick}
              disable={{
                left: pageN === 1,
                right: pageN === totalPageCount,
              }}
              nav={{ current: pageN, total: totalPageCount, hardware }}
            />
          </>
        )}
      </Container>
    </div>
    </>
  );
};

export default PageSelection;
