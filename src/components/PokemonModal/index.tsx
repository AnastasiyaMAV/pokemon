import React, { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useOnePokemonData from '../../hooks/useOnePokemonData';
import { ENDPOINT_ENUM } from '../../types/dataEnum';
import Modal from '../Modal';
import PokemonBigCard from '../PokemonBigCard';

const PokemonModal = () => {
  const { pokemonId } = useParams();

  const { data } = useOnePokemonData(
    ENDPOINT_ENUM.getOnePokemon,
    Number(pokemonId),
  );

  const navigate = useNavigate();

  const handleClose = useCallback(() => {
    navigate('../');
  }, [navigate]);

  return (
    <Modal onClose={handleClose}>
      {data && (
        <PokemonBigCard
          id={data.id}
          name={data.name_clean}
          attack={data.stats.attack}
          defense={data.stats.defense}
          stAttack={data.stats['special-attack']}
          stDefense={data.stats['special-defense']}
          types={data.types}
          abilities={data.abilities}
          img={data.img}
          cardColor={data.types[0]}
        />
      )}
    </Modal>
  );
};

export default PokemonModal;
