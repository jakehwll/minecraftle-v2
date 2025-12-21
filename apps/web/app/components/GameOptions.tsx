import useGameOptions from "~/hooks/useGameOptions";

export const GameOptions = () => {
  const { guiScale } = useGameOptions()

  return (
    <style>
      {`
        :root {
            --gui-scale: ${guiScale};
        }  
    `}
    </style>
  );
};