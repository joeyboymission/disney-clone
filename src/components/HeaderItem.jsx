import PropTypes from "prop-types";

function HeaderItem({ name, Icon }) {
  return (
    <div className="text-white flex items-center gap-3 text-[12px] font-semibold cursor-pointer hover:underline underline-offset-4 mb-3">
      <div className="w-6 h-6">{Icon}</div>
      <h2>{name}</h2>
    </div>
  );
}

HeaderItem.propTypes = {
  name: PropTypes.string.isRequired,
  Icon: PropTypes.element.isRequired,
};

export default HeaderItem;
