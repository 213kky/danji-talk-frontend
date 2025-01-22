import styles from "./SelectBox.module.scss";

type SelectBoxProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  option: { value: string; label: string }[];
  placeholder: string;
  isOpen?: boolean;
};

const SelectBox: React.FC<SelectBoxProps> = ({
  placeholder,
  option,
  isOpen,
}) => {
  return (
    <article className={`${styles.contSelect} ${isOpen ? styles.on : ""}`}>
      <button className={`${styles.btnSelect} ${isOpen ? styles.on : ""}`}>
        {placeholder}
      </button>
      <ul className={`${styles.listMember}`}>
        {option.map((item) => (
          <li>
            <button type="button" value={item.value}>
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default SelectBox;
