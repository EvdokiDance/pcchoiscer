import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setHeaderName } from "../../store/reducers/headerReducer";
import { getAllBuilds } from "../../api/api";
import { TSavedBuild } from "../../api/typesApi";


import styles from "./PageAllBuilds.module.css";
import { Link } from "react-router-dom";
import { SavedBuild } from "../PageSavedBuilds/SavedBuild/SavedBuild";
import { Spinner } from "../../components";

export default function PageAllBuilds() {
  const [builds, setBuilds] = useState<TSavedBuild[] | []>([]);
  const [spinner, setSpinner] = useState(true); 

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeaderName("Все сборки"));

    getAllBuilds().then((builds) => setBuilds(builds)).finally(() => setSpinner(false));
  }, []);


  return (
    <div>
      {spinner ? <Spinner/> : 
      <>
        {builds.length > 0 ? (
        <ul className={styles.buildWrapper}>  
          {builds.map((savedBuild: TSavedBuild) => (
            <article key={savedBuild.id} className={styles.buildItem}>
              <h1 className={styles.buildItemTitle}>
                Сборка #{savedBuild.id}
              </h1>
              <Link className={styles.link} to={`${savedBuild.id}`}>
                <SavedBuild savedBuild={savedBuild} />
              </Link>
            </article>
          ))}
        </ul>
      ) : (
        <div>Сборок нету</div>
      )}
      </>}
    </div>
  );
}
