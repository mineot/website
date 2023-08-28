export function Menu() {
  const items = [];

  for (let index = 0; index < 100; index++) {
    items.push(<div key={index}>Item {index}</div>);
  }

  return <div>{items}</div>;
}
