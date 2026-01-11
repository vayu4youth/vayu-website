export const createPageUrl = (pageName) => {
  switch (pageName) {
    case "Home":
      return "/";
    case "Team":
      return "/team";
    case "About":
      return "/about";
    case "Events":
      return "/events";
    default:
      return "/";
  }
};