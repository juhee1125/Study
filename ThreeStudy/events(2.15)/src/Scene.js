const Scene = () => {
  return (
    <>
      <mesh position-x={1}>
        <boxGeometry />
        <meshBasicMaterial color="orange" />
      </mesh>

      <mesh position-x={-1}>
        <boxGeometry />
        <meshBasicMaterial color="purple" />
      </mesh>
    </>
  );
};

export default Scene;
