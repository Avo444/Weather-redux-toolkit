
import Skeleton from "react-loading-skeleton";
import styles from "./index.module.scss";
const SkeletonContent = () => {
    return (
        <div className={styles.content}>
            <h3>
                <Skeleton width={100} height={20} />
            </h3>

            <h1>
                <Skeleton width={80} height={30} />
            </h1>

            <div className={styles.imgContent}>
                <Skeleton circle={true} width={100} height={100} />
                <h2 className={styles.status}>
                    <Skeleton width={60} height={20} />
                </h2>
            </div>
        </div>
    );
};

export default SkeletonContent;
