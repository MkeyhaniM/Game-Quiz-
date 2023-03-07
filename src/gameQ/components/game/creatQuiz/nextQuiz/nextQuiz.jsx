import Button from 'react-bootstrap/Button';

export function NextQuiz({B_GET_N_Q}) {
    return (
        <>
            <Button className='mt-4' onClick={e=>B_GET_N_Q(e)} variant="primary">Next Quiz</Button>{' '}
        </>
    );
}