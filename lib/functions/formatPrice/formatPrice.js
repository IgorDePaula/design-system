"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatPrice = (value) => {
    if (value === 0) {
        return 'R$ 0,00';
    }
    if (value > 0) {
        return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value).replace(' ', ' ');
    }
    return '';
};
exports.default = formatPrice;
//# sourceMappingURL=formatPrice.js.map