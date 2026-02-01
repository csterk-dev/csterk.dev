
/** Util type used for links and their associated metadata. */
type LinkItem = {
  key: string;
  label: string;
  href: string;
  icon?: import("react").ElementType;
};

type TechStackItem = {
  key: string;
  name: string;
  logoSource: string;
}

type TechStackGroup = {
  key: string;
  title: string;
  description: string;
  items: TechStackItem[]
}