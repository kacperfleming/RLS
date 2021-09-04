import useOffersList from "../../hooks/use-offersList";

const GlobalMarket = (props) => {
  const offersList = useOffersList({ url: "/offers" });

  return offersList;
};

export default GlobalMarket;
