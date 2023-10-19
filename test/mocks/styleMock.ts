const toasterStyle = {
  position: 'absolute',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  padding: '20px',
  transform: 'translateY(0)',
  height: 'fit-content',
  transition: 'all 230ms cubic-bezier(.21, 1.02, .73, 1)',
};

const toastStyle = {
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  borderRadius: '0.375rem',
  backgroundColor: 'rgb(243, 244, 246)',
  fontWeight: 500,
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  color: 'rgb(17, 24, 39)',
  display: 'flex',
  gap: '4px',
  minWidth: '220px',
};

export { toasterStyle, toastStyle };
