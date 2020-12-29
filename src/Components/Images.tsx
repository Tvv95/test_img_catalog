import { mergeWith, isArray } from 'lodash';

function Images(props: any) {
    const dataImg = props.dataImg;
    const isGrouped = props.isGrouped;
    const setTag = props.setTag;

    const createId = (path: string, type: string = '') => {
        return type + path.substring(path.lastIndexOf('media/') + 6, path.lastIndexOf('/giphy'));
    }

    const customizer = (objValue: any, srcValue: any) => {
        if (isArray(objValue)) {
            if (isArray(objValue[0])) {
                return [...objValue, srcValue];
            }
            return [objValue, srcValue];
        }
    }

    if (isGrouped) {
        const groupedData = {};
        dataImg.map((current: any) => mergeWith(groupedData, current, customizer));
        return Object.entries(groupedData).map((current: any) => {
            return (<div className='card' key={'group_' + current[0]}><h5 className='card-title'>{current[0]}</h5>
                {current[1].map((elem: any) => <div className='card insideCard' key={createId(elem.toString(), 'card_')}><img className='card-img img-fluid' src={elem} alt={current[0]} onClick={() => setTag(current[0])} /></div>)}</div>);
        })
    }
    return dataImg.map((current: any) => Object.entries(current).map((elem: any) => {
        return <div className='card mb-2' key={createId(elem[1][0], 'card_')}>
            {elem[1].map((cur: any) => <img className='card-img img-fluid' key={createId(cur)} src={cur} alt={elem[0]} onClick={() => setTag(elem[0])} />)}
        </div>
    }))
}

export default Images;