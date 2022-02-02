import './dropbox.scss';

const Dropbox = (props) => {
  const children = props.children;
  return (
    <div className="dropbox">
      <div className="dropbox-head">
        <span className="dropbox-head__title">Title</span>
      </div>
      <div className="dropbox-content">{children}</div>
    </div>
  );
};

export default Dropbox;
