import { PlusCircleOutlined } from '@ant-design/icons';
export const FabAddButton = ({ onClick }) => {
    const buttonStyle = {
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '70px',
        height: '70px',
        borderRadius: '50%',
        backgroundColor: '#007bff', // Primary color
        color: 'white',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        fontSize: '24px',
        zIndex: 1000, // Ensures the button is above other elements
    };

    return (
        <button style={buttonStyle} onClick={onClick}>
            <PlusCircleOutlined style={{ fontSize: '40px' }} />
        </button>
    );
};