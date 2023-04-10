const styleConf = await fetch("./style.json");
const theme = await styleConf.json();
export default theme;