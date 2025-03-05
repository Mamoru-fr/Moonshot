// To confirm with EBP
export const AccountingConstant = {
    PaymentCategory: {
        EXPENSE: {
            FOOD: 'food',
            TRANSPORT: 'transport',
            ENTERTAINMENT: 'entertainment',
            SHOPPING: 'shopping',
            BILLS: 'bills',
            TRAVEL: 'travel',
            HEALTH: 'health',
            EDUCATION: 'education',
            OTHER: 'other',
        }, // An Dictionary of ExpenseCategory

        INCOME: {
            SALARY: 'salary',
            BONUS: 'bonus',
            DIVIDEND: 'dividend',
            INTEREST: 'interest',
            OTHER: 'other',
        }, // An Dictionary of IncomeCategory

    }, // An Dictionary of PaymentCategory

    PaymentCategoryIcon: {
        EXPENSE: {
            FOOD: 'food',
            TRANSPORT: 'transport',
            ENTERTAINMENT: 'entertainment',
            SHOPPING: 'shopping',
            BILLS: 'bills',
            TRAVEL: 'travel',
            HEALTH: 'health',
            EDUCATION: 'education',
            OTHER: 'other',
        },

        INCOME: {
            SALARY: 'salary',
            BONUS: 'bonus',
            DIVIDEND: 'dividend',
            INTEREST: 'interest',
            OTHER: 'other',
        },

    }, // An Dictionary of PaymentCategoryIcon

    PaymentFrequency: {
        ONE_TIME: 'one time',
        DAILY: 'daily',
        WEEKLY: 'weekly',
        BIWEEKLY: 'biweekly',
        MONTHLY: 'monthly',
        YEARLY: 'yearly',
    }, // An Dictionary of PaymentFrequency

    PaymentMethod: {
        CASH: 'cash',
        CREDIT_CARD: 'credit card',
        DEBIT_CARD: 'debit card',
        DIRECT_DEBIT: 'direct debit',
        INTERNATIONAL_TRANSFER: 'international transfer',
        TRANSFER: 'transfer',
    }, // An Dictionary of PaymentMethod

    PaymentMethodIcon: {
        CASH: 'cash',
        CREDIT_CARD: 'credit-card',
        DEBIT_CARD: 'credit-card',
        DIRECT_DEBIT: 'credit-card',
        INTERNATIONAL_TRANSFER: 'credit-card',
    }, // An Dictionary of PaymentMethodIcon

    PaymentStatus: {
        PAID: 'paid',
        PENDING: 'pending',
        UNPAID: 'unpaid',
    }, // An Dictionary of PaymentStatus

    PaymentStatusColor: {
        PAID: 'green',
        PENDING: 'yellow',
        UNPAID: 'red',
    }, // An Dictionary of PaymentStatusColor
    
    PaymentType: {
        EXPENSE: 'expense',
        INCOME: 'income',
    }, // An Dictionary of PaymentType
    
    PaymentTypeColor: {
        EXPENSE: 'red',
        INCOME: 'green',
    }, // An Dictionary of PaymentTypeColor

    PaymentTypeIcon: {
        EXPENSE: 'minus',
        INCOME: 'plus',
    }, // An Dictionary of PaymentTypeIcon

}