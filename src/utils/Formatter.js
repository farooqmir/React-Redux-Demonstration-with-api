export function getFormattedUrlByCriteria(criteria, url) {
  if (criteria.type == "facebook")
    return url
      .replace("[##type##]", "shared")
      .replace("[##days##]", `${criteria.days}/${criteria.type}`);
  else {
    return url
      .replace("[##type##]", criteria.type)
      .replace("[##days##]", criteria.days);
  }
}
