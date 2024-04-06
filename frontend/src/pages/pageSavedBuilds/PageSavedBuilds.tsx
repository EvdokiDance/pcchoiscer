import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setHeaderName } from "../../store/reducers/headerReducer";
import { getSavedBuilds } from "../../api/api";
import { TSavedBuild } from "../../api/typesApi";
import { SavedBuild } from "./savedBuild/SavedBuild";

import styles from "./PageSavedBuilds.module.css";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/useRedux";
import { Spinner } from "../../components";

export default function PageSavedBuilds() {
  const [builds, setBuilds] = useState<TSavedBuild[] | []>([]);
  const [spinner, setSpinner] = useState(true);

  const user = useAppSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeaderName("Мои сборки"));

    getSavedBuilds(user.id).then((builds) => setBuilds(builds)).finally(() => setSpinner(false));
  }, []);

  return (
    <div>
      {spinner ? (
        <Spinner />
      ) : (
        <>
          {builds.length > 0 ? (
            <ul className={styles.buildWrapper}>
              {builds.map((savedBuild: TSavedBuild, index) => (
                <article key={index} className={styles.buildItem}>
                  <h1 className={styles.buildItemTitle}>Сборка #{index + 1}</h1>
                  <Link className={styles.link} to={`${savedBuild.id}`}>
                    <SavedBuild savedBuild={savedBuild} />
                  </Link>
                </article>
              ))}
            </ul>
          ) : (
            <div>Сборок нету</div>
          )}
        </>
      )}
    </div>
  );
}
