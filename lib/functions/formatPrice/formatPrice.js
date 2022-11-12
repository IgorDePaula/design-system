const formatPrice = (value) => {
    if (value === 0) {
        return 'R$ 0,00';
    }
    if (value > 0) {
        return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value).replace(' ', ' ');
    }
    return '';
};
export default formatPrice;
//# sourceMappingURL=formatPrice.js.map