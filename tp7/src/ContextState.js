import * as React from "react";
import { useContext } from "react";

export const initialState = {
    loading: true,
    compra: {
        precio: 0,
        lista: [],
        eliminarId: [],
        cantProductos: 0,
    },
};

export const ActionTypes = {
    SetLoading: "SET_LOADING",
    SetCompra: "SET_COMPRA",
    SetCompraPrecio: "SET_COMPRA_PRECIO",
    SetCompraLista: "SET_COMPRA_LISTA",
    SetCompraEliminarId: "SET_COMPRA_ELIMINAR_ID",
    SetCompraCantProductos: "SET_COMPRA_CANT_PRODUCTOS"
};

export const reducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SetLoading:
            return {
                ...state,
                loading: action.value,
            };
        case ActionTypes.SetCompra:
            return {
                ...state,
                compra: action.value,
            };
        case ActionTypes.SetCompraPrecio:
            return {
                ...state,
                compra: {
                    ...state.compra,
                    precio: action.value,
                }
            };
        case ActionTypes.SetCompraLista:
            return {
                ...state,
                compra: {
                    ...state.compra,
                    lista: [...state.compra.lista, action.value],
                }
            };
        case ActionTypes.SetCompraCantProductos:
            return {
                ...state,
                compra: {
                    ...state.compra,
                    CantProductos: action.value,
                }
            };
        case ActionTypes.SetCompraEliminarId:
            return {
                ...state,
                compra: {
                    ...state.compra,
                    lista: state.compra.lista.filter((producto) => producto.id !== action.value)
                }
            };
        default:
            return state;
    }
};

export const initialContext = {
    contextState: initialState,
    setContextState: () => { },
};

const Cont = React.createContext(initialContext);

export function ContextProvider({ children, initial = initialState }) {
    const [state, dispatch] = React.useReducer(reducer, initial);

    const contextState = state;
    const setContextState = dispatch;

    return <Cont.Provider value={{ contextState, setContextState }}>{children}</Cont.Provider>;
}

export const useContextState = () => useContext(Cont);