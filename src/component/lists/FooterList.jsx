function FooterListItem({ name, link }) {
  return (
    <li>
      <a
        href={link}
        className="group relative inline-block transition-all duration-300 ease-out"
      >
        {/* // Symbol */}
        <span className="absolute left-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-orange-600">
          //
        </span>

        {/* Text */}
        <span className="inline-block group-hover:translate-x-6 transition-transform duration-300 group-hover:text-orange-600">
          {name}
        </span>
      </a>
    </li>
  );
}

export default FooterListItem;
