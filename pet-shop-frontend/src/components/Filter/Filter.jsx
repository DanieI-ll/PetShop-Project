import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import styles from './Filter.module.css';
import checkbox from '../../assets/icons/checkbox.svg';
import checkedCheckbox from '../../assets/icons/checkbox_checked.svg';
import { ArrowVerticalIcon } from '../../ui/icons/ui';

const Filter = ({ isDiscounted }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showDropdown, setShowDropdown] = useState(false);
  const nameParams = {
    default: 'by default',
    newest: 'newest',
    priceHighToLow: 'price: high-low',
    priceLowToHigh: 'price: low-high',
  };

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(name, type === 'checkbox' ? String(checked) : value);
    setSearchParams(newSearchParams);
  }

  const handleSelectClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (value) => {
    handleChange({ target: { name: 'sortType', value, type: 'select' } });
    setShowDropdown(false);
  };

  return (
    <div className={styles.Filter}>
      <div className={styles.Filter_Price_box}>
        <label className={styles.Filter_Price_label}>
          Price
          <input placeholder="from" className={styles.Filter_minPrice_input} name="minPrice" type="number" value={searchParams.get('minPrice') || ''} onChange={handleChange} />
        </label>

        <input placeholder="to" className={styles.Filter_maxPrice_input} name="maxPrice" type="number" value={searchParams.get('maxPrice') || ''} onChange={handleChange} />
      </div>
      {isDiscounted !== 'true' && (
        <div className={styles.Filter_includeDiscount_box}>
          <label className={styles.Filter_includeDiscount_label}>
            Discounted items
            <input className={styles.Filter_includeDiscount_checkbox} name="includeDiscount" type="checkbox" onChange={handleChange} checked={searchParams.get('includeDiscount') === 'true'} />
            <img style={{ position: 'absolute', right: 0 }} src={searchParams.get('includeDiscount') === 'true' ? checkedCheckbox : checkbox} alt="checkbox" className={styles.Filter_includeDiscount_img} />
          </label>
        </div>
      )}
      <div className={`${styles.Filter_sortType_box} ${showDropdown ? styles.Filter_select_open : ''}`}>
        <label className={styles.Filter_sortType_label}>
          Sorted
          <div className={styles.Filter_includeDiscount_select} onClick={handleSelectClick}>
            {nameParams[searchParams.get('sortType') || 'newest']}
            <ArrowVerticalIcon type={showDropdown ? 'top' : 'bottom'} />
          </div>
        </label>
        {showDropdown && (
          <div className={styles.Filter_select_items}>
            <div onClick={() => handleOptionClick('default')}>by default</div>
            <div onClick={() => handleOptionClick('newest')}>newest</div>
            <div onClick={() => handleOptionClick('priceHighToLow')}>price: high-low</div>
            <div onClick={() => handleOptionClick('priceLowToHigh')}>price: low-high</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
