/** 
 * Defines styles and themes for a toast notification system.
 * 
 * @constant {object} toasterStyle - Styles for the toaster container.
 * @constant {object} toastStyle - Styles for individual toast messages.
 * @constant {object} lightTheme - Light theme styles for toasts.
 * @constant {object} darkTheme - Dark theme styles for toasts.
 */

const toasterStyle = {
  position: 'fixed',
  zIndex: 9999,
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  margin: '16px',
  transform: 'translateY(0)',
  height: '41px',
  transition: 'all 230ms cubic-bezier(.21, 1.02, .73, 1)',
};

const toastStyle = {
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  borderRadius: '0.375rem',
  fontWeight: 500,
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  display: 'flex',
  gap: '4px',
  minWidth: '220px',
};

const lightTheme = {
  backgroundColor: 'rgb(243, 244, 246)',
  color: 'rgb(17, 24, 39)',
};

const darkTheme = {
  backgroundColor: 'rgb(17, 24, 39)',
  color: 'rgb(243, 244, 246)',
};

export { toasterStyle, toastStyle, lightTheme, darkTheme };
