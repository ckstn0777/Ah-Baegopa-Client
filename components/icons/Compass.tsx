const Compass = ({ ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM12 20.7188C7.18594 20.7188 3.28125 16.8141 3.28125 12C3.28125 7.18594 7.18594 3.28125 12 3.28125C16.8141 3.28125 20.7188 7.18594 20.7188 12C20.7188 16.8141 16.8141 20.7188 12 20.7188ZM16.65 6.93516C16.5582 6.89929 16.4603 6.88186 16.3617 6.88387C16.2632 6.88588 16.166 6.90729 16.0758 6.94687L9.72422 9.72656L6.94687 16.0781C6.8625 16.2703 6.8625 16.4883 6.94687 16.6805C7.02656 16.8633 7.17422 17.0063 7.36172 17.0789C7.45078 17.1141 7.54219 17.1305 7.63594 17.1305C7.73906 17.1305 7.83984 17.1094 7.93594 17.0672L14.2875 14.2875L17.0648 7.93594C17.1054 7.84324 17.1268 7.74332 17.1277 7.64216C17.1287 7.541 17.1092 7.44068 17.0705 7.34723C17.0317 7.25377 16.9745 7.16911 16.9023 7.0983C16.83 7.02749 16.7442 6.972 16.65 6.93516ZM13.5187 12.525L14.1328 13.1391L13.1391 14.1328L12.525 13.5187L8.90625 15.1031L10.4883 11.4844L9.89062 10.8844L10.8844 9.89062L11.482 10.4883L15.1031 8.90625L13.5187 12.525ZM10.8844 9.89062L9.89062 10.8844L10.4883 11.4844L12.525 13.5187L13.1391 14.1328L14.1328 13.1391L13.5187 12.525L11.4844 10.4883L10.8844 9.89062Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default Compass
