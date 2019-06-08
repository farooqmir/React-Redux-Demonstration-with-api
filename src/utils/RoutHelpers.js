export function getArticleTitleByRoute(content, targetPath) {
  let path = content.navigation.paths.filter(item => item.path == targetPath);
  console.log("path ---------" + path);
  if (path && !path.length)
    path = content.mostPopular.filter(item => item.path == targetPath);

  return path && path.length && path[0].title;
}
