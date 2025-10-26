export const menuItemClasses = (isActive: boolean, collapsed?: boolean, disabled: boolean = false) => `
    flex
    items-center
    px-3
    py-2
    rounded-lg
    transition-colors
    cursor-pointer
    select-none
    ${isActive
    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600'
    : 'text-gray-700 hover:bg-gray-100'}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${collapsed ? 'justify-center px-3' : ''}
`;

export const toggleButtonClasses = `
        w-full
        flex
        items-center
        justify-center
        p-2
        text-gray-600
        hover:bg-gray-100 
        rounded-lg
        transition-colors
        border-t
        border-gray-200
    `;
