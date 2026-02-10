import Skeleton from "react-loading-skeleton";
import styles from "./index.module.scss";
const SkeletonContent = () => {
  return (
    <div className={styles.list}>
      <Skeleton width={180} height={100}/>
      <Skeleton width={180} height={100}/>
      <Skeleton width={180} height={100}/>
      <Skeleton width={180} height={100}/>
      <Skeleton width={180} height={100}/>
      <Skeleton width={180} height={100}/>
    </div>
  )
}

export default SkeletonContent;