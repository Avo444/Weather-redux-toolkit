import Skeleton from "react-loading-skeleton"
import styles from "./index.module.scss";
const SkeletonContent = () => {
  return (
    <div className={styles.list}>
      <Skeleton width={350} height={40} count={5} />
    </div>
  )
}

export default SkeletonContent
