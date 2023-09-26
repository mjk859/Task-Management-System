import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    id: PropTypes.string.isRequired
};

const JwModal = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const open = (e) => {
        e.preventDefault();
        setIsOpen(true);
        document.body.classList.add('jw-modal-open');
    };

    const close = (e) => {
        e.preventDefault();
        setIsOpen(false);
        document.body.classList.remove('jw-modal-open');
    };

    const handleClick = (e) => {
        // close modal on background click
        if (e.target.className === 'jw-modal') {
            close(e);
        }
    };

    const element = useRef(null);

    useEffect(() => {
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(element.current);

        // Define a unique identifier for this modal instance
        const modalInstance = { id: props.id, open, close };

        // add this modal instance to the modal service so it's accessible from other components
        JwModal.modals.push(modalInstance);
        
        return () => {
            // remove this modal instance from modal service based on its unique identifier
            JwModal.modals = JwModal.modals.filter((modal) => modal.id !== props.id);
            element.current.remove();
        };
    }, [props.id]);

    return (
        <div style={{ display: isOpen ? '' : 'none' }} onClick={handleClick} ref={element}>
            <div className="jw-modal">
                <div className="jw-modal-body">
                    {props.children}
                </div>
            </div>
            <div className="jw-modal-background"></div>
        </div>
    );
};

JwModal.propTypes = propTypes;
JwModal.modals = [];

export default JwModal;
