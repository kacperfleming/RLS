import { useParams } from "react-router-dom";

import useOffersList from "../../hooks/use-offersList";

const UserOffers = (props) => {
  const params = useParams();
  const { uid } = params;

  const offersList = useOffersList({ url: `/offers/${uid}` });

  return offersList;
};

export default UserOffers;
