import React, { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useOnePokemonData } from '../../hooks/useOnePokemonData';
import { ENDPOINT_ENUM } from '../../types/dataEnum';
import { Modal } from '../UI/Modal';
import { PokemonBigCard } from '../PokemonBigCard';

export const PokemonModal = () => {
  const { pokemonId } = useParams();

  const { oneData } = useOnePokemonData(ENDPOINT_ENUM.getOnePokemon, pokemonId);

  const masTypes: any[] = [];
  oneData?.types.map((item: any) => {
    return masTypes.push(item.type.name);
  });

  const masAbilities: any[] = [];
  oneData?.abilities.map((item: any) => {
    return masAbilities.push(item.ability.name);
  });

  const navigate = useNavigate();

  const handleClose = useCallback(() => {
    navigate('../');
  }, [navigate]);

  return (
    <Modal onClose={handleClose}>
      {oneData && (
        <PokemonBigCard
          name={oneData.name}
          height={oneData.height}
          weight={oneData.weight}
          experience={oneData.base_experience}
          types={masTypes}
          abilities={masAbilities}
          img={oneData.sprites.other.dream_world.front_default}
          cardColor={masTypes[0]}
        />
      )}
    </Modal>
  );
};
