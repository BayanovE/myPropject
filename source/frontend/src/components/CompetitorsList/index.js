import React, {Component, forwardRef} from 'react'
import MaterialTable from "material-table";
import PropTypes from "prop-types"

import {
    AddBox,
    ArrowUpward,
    Check,
    ChevronLeft,
    ChevronRight,
    Clear,
    DeleteOutline,
    Edit,
    FilterList,
    FirstPage,
    LastPage,
    Remove,
    SaveAlt,
    Search,
    ViewColumn,
  } from "@material-ui/icons";

class CompetitorsList extends Component{
    tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
    };

    componentDidMount(){
        
    }

    render() {
        return(
            <MaterialTable 
                icons={this.tableIcons}
                columns={[
                    { title: "Фамилия", field: "surname" },
                    { title: "Имя", field: "name" },
                    { title: "Отчество", field: "secondName", },
                    { 
                        title: "Клуб", 
                        field: "club",
                        lookup: {...['УКРФ', 'Золотой Сокол', 'Ночная стража', 'NoName', 'nramazzone', 'MwS', 'Rumata Fencing', 'HEMA Academy']},
                    },
                    { title: "Номинации", field: "nomination" },
                    {
                        title: "Город",
                        field: "city",
                        lookup: { 66: "Екатеринбург", 45: "Челябинск" }
                    }
                ]}
                data={this.props.data}
              title="Участники"
            />
        );
    }

}

CompetitorsList.defaultProps = {
    data: [],
};

CompetitorsList.propTypes = {
    data: PropTypes.array,
};

export default CompetitorsList; 