import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDocumentTitle, setDocumentTitle } from "../features/documentTitleSlice";

const useDocumentTitle = title => {
    const dispatch = useDispatch();
    const documentTitle = useSelector(getDocumentTitle);
    
    const setTitle = (value) => {
        dispatch(setDocumentTitle(value));
    }
    
    //Use useEffect to prevent react warning about bad setState() call
    useEffect(() => {
        setTitle(title);
    }, [title]);

    useEffect(() => {
        document.title = documentTitle;
    }, [documentTitle]);

    return [documentTitle, setTitle];
}

export default useDocumentTitle;