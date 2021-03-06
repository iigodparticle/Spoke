export const NO_TAG = { key: -1, value: -1, display: "NO TAG" };
export const ANY_TAG = { key: -2, value: -2, display: "ANY TAG" };
export const IGNORE_TAGS = { key: -3, value: -3, display: "IGNORE TAGS" };

// TODO: add another table for possible values?
export const TAGS = {
  1: { key: 1, value: "COME BACK LATER", display: "COME BACK LATER" },
  2: { key: 2, value: "SPANISH", display: "SPANISH" },
  3: { key: 3, value: "LANGUAGE BARRIER", display: "LANGUAGE BARRIER" }
};

export const TAG_META_FILTERS = {};
TAG_META_FILTERS[IGNORE_TAGS.key] = IGNORE_TAGS;
TAG_META_FILTERS[ANY_TAG.key] = ANY_TAG;
TAG_META_FILTERS[NO_TAG.key] = NO_TAG;

export const makeTagMetafilter = (ignoreTags, anyTag, noTag, tagItem) => {
  const filter = {
    ignoreTags,
    anyTag,
    noTag,
    selectedTags: {}
  };

  if (tagItem) {
    filter.selectedTags[tagItem.key] = tagItem;
  }

  return filter;
};

export const IGNORE_TAGS_FILTER = makeTagMetafilter(
  true,
  false,
  false,
  IGNORE_TAGS
);
export const ANY_TAG_FILTER = makeTagMetafilter(false, true, false, ANY_TAG);
export const NO_TAG_FILTER = makeTagMetafilter(false, false, true, NO_TAG);
export const EMPTY_TAG_FILTER = makeTagMetafilter(false, false, false, null);

export default TAGS;
