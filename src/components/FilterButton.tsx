import { ButtonHTMLAttributes, FC } from "react";

interface FilterButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  quantity: number;
  filter: string;
  index: number;
}

const FilterButton: FC<FilterButtonProps> = ({
  label,
  quantity,
  filter,
  index,
  ...restProps
}) => {
  return (
    <button
      className={`flex items-center ${
        filter == label && "font-semibold text-primary"
      }`}
      {...restProps}
    >
      <div className="relative px-3">
        {index !== 0 && <span className="mr-1.5 text-sm">/</span>}
        {label}
        <span className="absolute -right-1 -top-1.5 text-xs">{quantity}</span>
      </div>
    </button>
  );
};

export default FilterButton;
