const GridItem = ({ twoWide, fourWide, children }) => {
    let className = "grid-item";
    if (twoWide) {
        className += " two-wide";
    }
    if (fourWide) {
        className += " four-wide";
    }
    return <div className={className}>{children}</div>;
};

export default GridItem;
