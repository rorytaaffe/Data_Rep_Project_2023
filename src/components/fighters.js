import FighterItem from "./fighterItem";

// Functional component that renders a list of fighters using the FighterItem component
function Fighters(props) {
  // Map through the array of fighters and render a FighterItem for each fighter
  return props.myFighters.map(
    (fighter) => {
      // Render a FighterItem with the fighter data and a key for React optimization
      return <FighterItem myFighter={fighter} key={fighter._id} Reload={() => { props.ReloadData(); }}></FighterItem>
    }
  );
}

export default Fighters;
