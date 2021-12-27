const filteredItems = (criteria) => {
    const filteredItems = actualWorks.filter((item) => {
      return Object.keys(criteria).every((filter) => {
        return criteria[filter] === item[filter];
      });
    });
    setFilteredWorks(filteredItems);
  };

  export default FilteredItems