// Tiesiog paprasta switch-case kondicija, kuri leidzia patikrinti visus galimus operation
// variantus ir pagal tai nuspresti, kokia aritmetika atlikti.

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
          return value1 + value2;
        case '-':
          return value1 - value2;
        case '*':
          return value1 * value2;
        case '/':
          return value1 / value2;
        default:
          return 0;
    }
  }