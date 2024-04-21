import { CommunityType } from "@/types/communityType";
import styles from "./SingleCommunity.module.css";

const SingleCommunity = ({ community, handleView }: { community: CommunityType, handleView?: (community) => void }) => {
  const { image, name, area } = community;

  return (
    <div className={styles.card} onClick={() => handleView(community)}>
      <div className={styles.circle}>
        <div
          className={styles.imageContainer}
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className={styles.overlay}>
          <div className={styles.name}>{name}</div>
          <div className={styles.area}>{area}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleCommunity;
