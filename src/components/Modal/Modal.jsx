export const Modal = ({ children, onClose }) => {
  return (
    <>
      <div className="modal-backdrop fade show" />

      <div className="modal fade show" style={{ display: 'block' }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
                          <h5 className="modal-title">Modal title</h5>
                          
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              />
                          
            </div>
{/* В children передаём текст Lorem Ipsum */}
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};