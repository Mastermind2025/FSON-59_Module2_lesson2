import { PropTypes } from 'prop-types';

export const Layout = ({ children }) => {
    return (
        <div className="d-flex h-100 w-100">
<main className="tab-content p-10 h-100 w-100"
style={{ minHeight: '100vh', maxWidth: '100wh' }}
            >
<div className="tab-pane fade show active">{children}</div>
 
</main>
        </div>
    );
};
Layout.propType = {
    children: PropTypes.node.isRequired,
}