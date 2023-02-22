import ProgressBar from 'react-bootstrap/ProgressBar';

export function percentAnswers() {
    const now=39;
    return (
        <div>
            <ProgressBar variant="success" now={now} label={`${now}%`}/>
            <ProgressBar variant="danger" now={now} label={`${now}%`}/>
        </div>
    );
}