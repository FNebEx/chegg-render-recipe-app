/**
 * @typedef {Object} Props
 * @property {Object[]} item - An object that contains information on a single item. 
 * @property {Function} onDelete - A function that will delete the current item when displayed.
 */

/**
 * A component that returns a single 
 * row in a table based on properties passed 
 * down from the "item" prop.
 * @param {Props} props
 * @returns A singlular table row.  
 */

function RecpieRowItem({ item, onDelete }) {
  const imgStyle = {
    width: "100px",
  };

  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.cuisine}</td>
      <td>
        <img src={item.photo} alt={item.name} style={imgStyle} />
      </td>
      <td>{item.ingredients}</td>
      <td>{item.preparation}</td>
      <td>
        <button type="button" name="delete" onClick={onDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default RecpieRowItem;
