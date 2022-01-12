import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  jsonb: any;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  authorized: Scalars['Boolean'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "encounter_rat_constraints" */
export type Encounter_Rat_Constraints = {
  __typename?: 'encounter_rat_constraints';
  /** An object relationship */
  encounter: Encounters;
  encounter_id: Scalars['Int'];
  locked_slots: Scalars['Int'];
  /** An object relationship */
  ratTypeByRatType: Rat_Types;
  rat_type: Rat_Types_Enum;
};

/** aggregated selection of "encounter_rat_constraints" */
export type Encounter_Rat_Constraints_Aggregate = {
  __typename?: 'encounter_rat_constraints_aggregate';
  aggregate?: Maybe<Encounter_Rat_Constraints_Aggregate_Fields>;
  nodes: Array<Encounter_Rat_Constraints>;
};

/** aggregate fields of "encounter_rat_constraints" */
export type Encounter_Rat_Constraints_Aggregate_Fields = {
  __typename?: 'encounter_rat_constraints_aggregate_fields';
  avg?: Maybe<Encounter_Rat_Constraints_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Encounter_Rat_Constraints_Max_Fields>;
  min?: Maybe<Encounter_Rat_Constraints_Min_Fields>;
  stddev?: Maybe<Encounter_Rat_Constraints_Stddev_Fields>;
  stddev_pop?: Maybe<Encounter_Rat_Constraints_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Encounter_Rat_Constraints_Stddev_Samp_Fields>;
  sum?: Maybe<Encounter_Rat_Constraints_Sum_Fields>;
  var_pop?: Maybe<Encounter_Rat_Constraints_Var_Pop_Fields>;
  var_samp?: Maybe<Encounter_Rat_Constraints_Var_Samp_Fields>;
  variance?: Maybe<Encounter_Rat_Constraints_Variance_Fields>;
};


/** aggregate fields of "encounter_rat_constraints" */
export type Encounter_Rat_Constraints_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Encounter_Rat_Constraints_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "encounter_rat_constraints" */
export type Encounter_Rat_Constraints_Aggregate_Order_By = {
  avg?: InputMaybe<Encounter_Rat_Constraints_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Encounter_Rat_Constraints_Max_Order_By>;
  min?: InputMaybe<Encounter_Rat_Constraints_Min_Order_By>;
  stddev?: InputMaybe<Encounter_Rat_Constraints_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Encounter_Rat_Constraints_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Encounter_Rat_Constraints_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Encounter_Rat_Constraints_Sum_Order_By>;
  var_pop?: InputMaybe<Encounter_Rat_Constraints_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Encounter_Rat_Constraints_Var_Samp_Order_By>;
  variance?: InputMaybe<Encounter_Rat_Constraints_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "encounter_rat_constraints" */
export type Encounter_Rat_Constraints_Arr_Rel_Insert_Input = {
  data: Array<Encounter_Rat_Constraints_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Encounter_Rat_Constraints_On_Conflict>;
};

/** aggregate avg on columns */
export type Encounter_Rat_Constraints_Avg_Fields = {
  __typename?: 'encounter_rat_constraints_avg_fields';
  encounter_id?: Maybe<Scalars['Float']>;
  locked_slots?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "encounter_rat_constraints" */
export type Encounter_Rat_Constraints_Avg_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
  locked_slots?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "encounter_rat_constraints". All fields are combined with a logical 'AND'. */
export type Encounter_Rat_Constraints_Bool_Exp = {
  _and?: InputMaybe<Array<Encounter_Rat_Constraints_Bool_Exp>>;
  _not?: InputMaybe<Encounter_Rat_Constraints_Bool_Exp>;
  _or?: InputMaybe<Array<Encounter_Rat_Constraints_Bool_Exp>>;
  encounter?: InputMaybe<Encounters_Bool_Exp>;
  encounter_id?: InputMaybe<Int_Comparison_Exp>;
  locked_slots?: InputMaybe<Int_Comparison_Exp>;
  ratTypeByRatType?: InputMaybe<Rat_Types_Bool_Exp>;
  rat_type?: InputMaybe<Rat_Types_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "encounter_rat_constraints" */
export enum Encounter_Rat_Constraints_Constraint {
  /** unique or primary key constraint */
  EncounterRatConstraintsPkey = 'encounter_rat_constraints_pkey'
}

/** input type for incrementing numeric columns in table "encounter_rat_constraints" */
export type Encounter_Rat_Constraints_Inc_Input = {
  encounter_id?: InputMaybe<Scalars['Int']>;
  locked_slots?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "encounter_rat_constraints" */
export type Encounter_Rat_Constraints_Insert_Input = {
  encounter?: InputMaybe<Encounters_Obj_Rel_Insert_Input>;
  encounter_id?: InputMaybe<Scalars['Int']>;
  locked_slots?: InputMaybe<Scalars['Int']>;
  ratTypeByRatType?: InputMaybe<Rat_Types_Obj_Rel_Insert_Input>;
  rat_type?: InputMaybe<Rat_Types_Enum>;
};

/** aggregate max on columns */
export type Encounter_Rat_Constraints_Max_Fields = {
  __typename?: 'encounter_rat_constraints_max_fields';
  encounter_id?: Maybe<Scalars['Int']>;
  locked_slots?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "encounter_rat_constraints" */
export type Encounter_Rat_Constraints_Max_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
  locked_slots?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Encounter_Rat_Constraints_Min_Fields = {
  __typename?: 'encounter_rat_constraints_min_fields';
  encounter_id?: Maybe<Scalars['Int']>;
  locked_slots?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "encounter_rat_constraints" */
export type Encounter_Rat_Constraints_Min_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
  locked_slots?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "encounter_rat_constraints" */
export type Encounter_Rat_Constraints_Mutation_Response = {
  __typename?: 'encounter_rat_constraints_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Encounter_Rat_Constraints>;
};

/** on conflict condition type for table "encounter_rat_constraints" */
export type Encounter_Rat_Constraints_On_Conflict = {
  constraint: Encounter_Rat_Constraints_Constraint;
  update_columns?: Array<Encounter_Rat_Constraints_Update_Column>;
  where?: InputMaybe<Encounter_Rat_Constraints_Bool_Exp>;
};

/** Ordering options when selecting data from "encounter_rat_constraints". */
export type Encounter_Rat_Constraints_Order_By = {
  encounter?: InputMaybe<Encounters_Order_By>;
  encounter_id?: InputMaybe<Order_By>;
  locked_slots?: InputMaybe<Order_By>;
  ratTypeByRatType?: InputMaybe<Rat_Types_Order_By>;
  rat_type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: encounter_rat_constraints */
export type Encounter_Rat_Constraints_Pk_Columns_Input = {
  encounter_id: Scalars['Int'];
  rat_type: Rat_Types_Enum;
};

/** select columns of table "encounter_rat_constraints" */
export enum Encounter_Rat_Constraints_Select_Column {
  /** column name */
  EncounterId = 'encounter_id',
  /** column name */
  LockedSlots = 'locked_slots',
  /** column name */
  RatType = 'rat_type'
}

/** input type for updating data in table "encounter_rat_constraints" */
export type Encounter_Rat_Constraints_Set_Input = {
  encounter_id?: InputMaybe<Scalars['Int']>;
  locked_slots?: InputMaybe<Scalars['Int']>;
  rat_type?: InputMaybe<Rat_Types_Enum>;
};

/** aggregate stddev on columns */
export type Encounter_Rat_Constraints_Stddev_Fields = {
  __typename?: 'encounter_rat_constraints_stddev_fields';
  encounter_id?: Maybe<Scalars['Float']>;
  locked_slots?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "encounter_rat_constraints" */
export type Encounter_Rat_Constraints_Stddev_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
  locked_slots?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Encounter_Rat_Constraints_Stddev_Pop_Fields = {
  __typename?: 'encounter_rat_constraints_stddev_pop_fields';
  encounter_id?: Maybe<Scalars['Float']>;
  locked_slots?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "encounter_rat_constraints" */
export type Encounter_Rat_Constraints_Stddev_Pop_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
  locked_slots?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Encounter_Rat_Constraints_Stddev_Samp_Fields = {
  __typename?: 'encounter_rat_constraints_stddev_samp_fields';
  encounter_id?: Maybe<Scalars['Float']>;
  locked_slots?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "encounter_rat_constraints" */
export type Encounter_Rat_Constraints_Stddev_Samp_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
  locked_slots?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Encounter_Rat_Constraints_Sum_Fields = {
  __typename?: 'encounter_rat_constraints_sum_fields';
  encounter_id?: Maybe<Scalars['Int']>;
  locked_slots?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "encounter_rat_constraints" */
export type Encounter_Rat_Constraints_Sum_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
  locked_slots?: InputMaybe<Order_By>;
};

/** update columns of table "encounter_rat_constraints" */
export enum Encounter_Rat_Constraints_Update_Column {
  /** column name */
  EncounterId = 'encounter_id',
  /** column name */
  LockedSlots = 'locked_slots',
  /** column name */
  RatType = 'rat_type'
}

/** aggregate var_pop on columns */
export type Encounter_Rat_Constraints_Var_Pop_Fields = {
  __typename?: 'encounter_rat_constraints_var_pop_fields';
  encounter_id?: Maybe<Scalars['Float']>;
  locked_slots?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "encounter_rat_constraints" */
export type Encounter_Rat_Constraints_Var_Pop_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
  locked_slots?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Encounter_Rat_Constraints_Var_Samp_Fields = {
  __typename?: 'encounter_rat_constraints_var_samp_fields';
  encounter_id?: Maybe<Scalars['Float']>;
  locked_slots?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "encounter_rat_constraints" */
export type Encounter_Rat_Constraints_Var_Samp_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
  locked_slots?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Encounter_Rat_Constraints_Variance_Fields = {
  __typename?: 'encounter_rat_constraints_variance_fields';
  encounter_id?: Maybe<Scalars['Float']>;
  locked_slots?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "encounter_rat_constraints" */
export type Encounter_Rat_Constraints_Variance_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
  locked_slots?: InputMaybe<Order_By>;
};

/**
 * WIll hold encounter's weakness
 *
 *
 * columns and relationships of "encounter_resistance"
 *
 */
export type Encounter_Resistance = {
  __typename?: 'encounter_resistance';
  /** An object relationship */
  encounter: Encounters;
  encounter_id: Scalars['Int'];
  /** An object relationship */
  rattribute: Rattributes;
  resistance: Rattributes_Enum;
};

/** aggregated selection of "encounter_resistance" */
export type Encounter_Resistance_Aggregate = {
  __typename?: 'encounter_resistance_aggregate';
  aggregate?: Maybe<Encounter_Resistance_Aggregate_Fields>;
  nodes: Array<Encounter_Resistance>;
};

/** aggregate fields of "encounter_resistance" */
export type Encounter_Resistance_Aggregate_Fields = {
  __typename?: 'encounter_resistance_aggregate_fields';
  avg?: Maybe<Encounter_Resistance_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Encounter_Resistance_Max_Fields>;
  min?: Maybe<Encounter_Resistance_Min_Fields>;
  stddev?: Maybe<Encounter_Resistance_Stddev_Fields>;
  stddev_pop?: Maybe<Encounter_Resistance_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Encounter_Resistance_Stddev_Samp_Fields>;
  sum?: Maybe<Encounter_Resistance_Sum_Fields>;
  var_pop?: Maybe<Encounter_Resistance_Var_Pop_Fields>;
  var_samp?: Maybe<Encounter_Resistance_Var_Samp_Fields>;
  variance?: Maybe<Encounter_Resistance_Variance_Fields>;
};


/** aggregate fields of "encounter_resistance" */
export type Encounter_Resistance_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Encounter_Resistance_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "encounter_resistance" */
export type Encounter_Resistance_Aggregate_Order_By = {
  avg?: InputMaybe<Encounter_Resistance_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Encounter_Resistance_Max_Order_By>;
  min?: InputMaybe<Encounter_Resistance_Min_Order_By>;
  stddev?: InputMaybe<Encounter_Resistance_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Encounter_Resistance_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Encounter_Resistance_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Encounter_Resistance_Sum_Order_By>;
  var_pop?: InputMaybe<Encounter_Resistance_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Encounter_Resistance_Var_Samp_Order_By>;
  variance?: InputMaybe<Encounter_Resistance_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "encounter_resistance" */
export type Encounter_Resistance_Arr_Rel_Insert_Input = {
  data: Array<Encounter_Resistance_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Encounter_Resistance_On_Conflict>;
};

/** aggregate avg on columns */
export type Encounter_Resistance_Avg_Fields = {
  __typename?: 'encounter_resistance_avg_fields';
  encounter_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "encounter_resistance" */
export type Encounter_Resistance_Avg_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "encounter_resistance". All fields are combined with a logical 'AND'. */
export type Encounter_Resistance_Bool_Exp = {
  _and?: InputMaybe<Array<Encounter_Resistance_Bool_Exp>>;
  _not?: InputMaybe<Encounter_Resistance_Bool_Exp>;
  _or?: InputMaybe<Array<Encounter_Resistance_Bool_Exp>>;
  encounter?: InputMaybe<Encounters_Bool_Exp>;
  encounter_id?: InputMaybe<Int_Comparison_Exp>;
  rattribute?: InputMaybe<Rattributes_Bool_Exp>;
  resistance?: InputMaybe<Rattributes_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "encounter_resistance" */
export enum Encounter_Resistance_Constraint {
  /** unique or primary key constraint */
  EncounterResistancePkey = 'encounter_resistance_pkey'
}

/** input type for incrementing numeric columns in table "encounter_resistance" */
export type Encounter_Resistance_Inc_Input = {
  encounter_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "encounter_resistance" */
export type Encounter_Resistance_Insert_Input = {
  encounter?: InputMaybe<Encounters_Obj_Rel_Insert_Input>;
  encounter_id?: InputMaybe<Scalars['Int']>;
  rattribute?: InputMaybe<Rattributes_Obj_Rel_Insert_Input>;
  resistance?: InputMaybe<Rattributes_Enum>;
};

/** aggregate max on columns */
export type Encounter_Resistance_Max_Fields = {
  __typename?: 'encounter_resistance_max_fields';
  encounter_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "encounter_resistance" */
export type Encounter_Resistance_Max_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Encounter_Resistance_Min_Fields = {
  __typename?: 'encounter_resistance_min_fields';
  encounter_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "encounter_resistance" */
export type Encounter_Resistance_Min_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "encounter_resistance" */
export type Encounter_Resistance_Mutation_Response = {
  __typename?: 'encounter_resistance_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Encounter_Resistance>;
};

/** on conflict condition type for table "encounter_resistance" */
export type Encounter_Resistance_On_Conflict = {
  constraint: Encounter_Resistance_Constraint;
  update_columns?: Array<Encounter_Resistance_Update_Column>;
  where?: InputMaybe<Encounter_Resistance_Bool_Exp>;
};

/** Ordering options when selecting data from "encounter_resistance". */
export type Encounter_Resistance_Order_By = {
  encounter?: InputMaybe<Encounters_Order_By>;
  encounter_id?: InputMaybe<Order_By>;
  rattribute?: InputMaybe<Rattributes_Order_By>;
  resistance?: InputMaybe<Order_By>;
};

/** primary key columns input for table: encounter_resistance */
export type Encounter_Resistance_Pk_Columns_Input = {
  encounter_id: Scalars['Int'];
  resistance: Rattributes_Enum;
};

/** select columns of table "encounter_resistance" */
export enum Encounter_Resistance_Select_Column {
  /** column name */
  EncounterId = 'encounter_id',
  /** column name */
  Resistance = 'resistance'
}

/** input type for updating data in table "encounter_resistance" */
export type Encounter_Resistance_Set_Input = {
  encounter_id?: InputMaybe<Scalars['Int']>;
  resistance?: InputMaybe<Rattributes_Enum>;
};

/** aggregate stddev on columns */
export type Encounter_Resistance_Stddev_Fields = {
  __typename?: 'encounter_resistance_stddev_fields';
  encounter_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "encounter_resistance" */
export type Encounter_Resistance_Stddev_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Encounter_Resistance_Stddev_Pop_Fields = {
  __typename?: 'encounter_resistance_stddev_pop_fields';
  encounter_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "encounter_resistance" */
export type Encounter_Resistance_Stddev_Pop_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Encounter_Resistance_Stddev_Samp_Fields = {
  __typename?: 'encounter_resistance_stddev_samp_fields';
  encounter_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "encounter_resistance" */
export type Encounter_Resistance_Stddev_Samp_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Encounter_Resistance_Sum_Fields = {
  __typename?: 'encounter_resistance_sum_fields';
  encounter_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "encounter_resistance" */
export type Encounter_Resistance_Sum_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
};

/** update columns of table "encounter_resistance" */
export enum Encounter_Resistance_Update_Column {
  /** column name */
  EncounterId = 'encounter_id',
  /** column name */
  Resistance = 'resistance'
}

/** aggregate var_pop on columns */
export type Encounter_Resistance_Var_Pop_Fields = {
  __typename?: 'encounter_resistance_var_pop_fields';
  encounter_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "encounter_resistance" */
export type Encounter_Resistance_Var_Pop_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Encounter_Resistance_Var_Samp_Fields = {
  __typename?: 'encounter_resistance_var_samp_fields';
  encounter_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "encounter_resistance" */
export type Encounter_Resistance_Var_Samp_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Encounter_Resistance_Variance_Fields = {
  __typename?: 'encounter_resistance_variance_fields';
  encounter_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "encounter_resistance" */
export type Encounter_Resistance_Variance_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "encounter_types" */
export type Encounter_Types = {
  __typename?: 'encounter_types';
  encounter_type: Scalars['String'];
  /** An array relationship */
  encounters: Array<Encounters>;
  /** An aggregate relationship */
  encounters_aggregate: Encounters_Aggregate;
};


/** columns and relationships of "encounter_types" */
export type Encounter_TypesEncountersArgs = {
  distinct_on?: InputMaybe<Array<Encounters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Encounters_Order_By>>;
  where?: InputMaybe<Encounters_Bool_Exp>;
};


/** columns and relationships of "encounter_types" */
export type Encounter_TypesEncounters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Encounters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Encounters_Order_By>>;
  where?: InputMaybe<Encounters_Bool_Exp>;
};

/** aggregated selection of "encounter_types" */
export type Encounter_Types_Aggregate = {
  __typename?: 'encounter_types_aggregate';
  aggregate?: Maybe<Encounter_Types_Aggregate_Fields>;
  nodes: Array<Encounter_Types>;
};

/** aggregate fields of "encounter_types" */
export type Encounter_Types_Aggregate_Fields = {
  __typename?: 'encounter_types_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Encounter_Types_Max_Fields>;
  min?: Maybe<Encounter_Types_Min_Fields>;
};


/** aggregate fields of "encounter_types" */
export type Encounter_Types_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Encounter_Types_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "encounter_types". All fields are combined with a logical 'AND'. */
export type Encounter_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Encounter_Types_Bool_Exp>>;
  _not?: InputMaybe<Encounter_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Encounter_Types_Bool_Exp>>;
  encounter_type?: InputMaybe<String_Comparison_Exp>;
  encounters?: InputMaybe<Encounters_Bool_Exp>;
};

/** unique or primary key constraints on table "encounter_types" */
export enum Encounter_Types_Constraint {
  /** unique or primary key constraint */
  EncounterTypesPkey = 'encounter_types_pkey'
}

export enum Encounter_Types_Enum {
  CommunityRaid = 'community_raid',
  FactionRaid = 'faction_raid',
  Solo = 'solo'
}

/** Boolean expression to compare columns of type "encounter_types_enum". All fields are combined with logical 'AND'. */
export type Encounter_Types_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Encounter_Types_Enum>;
  _in?: InputMaybe<Array<Encounter_Types_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Encounter_Types_Enum>;
  _nin?: InputMaybe<Array<Encounter_Types_Enum>>;
};

/** input type for inserting data into table "encounter_types" */
export type Encounter_Types_Insert_Input = {
  encounter_type?: InputMaybe<Scalars['String']>;
  encounters?: InputMaybe<Encounters_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Encounter_Types_Max_Fields = {
  __typename?: 'encounter_types_max_fields';
  encounter_type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Encounter_Types_Min_Fields = {
  __typename?: 'encounter_types_min_fields';
  encounter_type?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "encounter_types" */
export type Encounter_Types_Mutation_Response = {
  __typename?: 'encounter_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Encounter_Types>;
};

/** input type for inserting object relation for remote table "encounter_types" */
export type Encounter_Types_Obj_Rel_Insert_Input = {
  data: Encounter_Types_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Encounter_Types_On_Conflict>;
};

/** on conflict condition type for table "encounter_types" */
export type Encounter_Types_On_Conflict = {
  constraint: Encounter_Types_Constraint;
  update_columns?: Array<Encounter_Types_Update_Column>;
  where?: InputMaybe<Encounter_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "encounter_types". */
export type Encounter_Types_Order_By = {
  encounter_type?: InputMaybe<Order_By>;
  encounters_aggregate?: InputMaybe<Encounters_Aggregate_Order_By>;
};

/** primary key columns input for table: encounter_types */
export type Encounter_Types_Pk_Columns_Input = {
  encounter_type: Scalars['String'];
};

/** select columns of table "encounter_types" */
export enum Encounter_Types_Select_Column {
  /** column name */
  EncounterType = 'encounter_type'
}

/** input type for updating data in table "encounter_types" */
export type Encounter_Types_Set_Input = {
  encounter_type?: InputMaybe<Scalars['String']>;
};

/** update columns of table "encounter_types" */
export enum Encounter_Types_Update_Column {
  /** column name */
  EncounterType = 'encounter_type'
}

/**
 * Will hold the encounter's weakness
 *
 *
 * columns and relationships of "encounter_weakness"
 *
 */
export type Encounter_Weakness = {
  __typename?: 'encounter_weakness';
  /** An object relationship */
  encounter: Encounters;
  encounter_id: Scalars['Int'];
  /** An object relationship */
  rattribute: Rattributes;
  weakness: Rattributes_Enum;
};

/** aggregated selection of "encounter_weakness" */
export type Encounter_Weakness_Aggregate = {
  __typename?: 'encounter_weakness_aggregate';
  aggregate?: Maybe<Encounter_Weakness_Aggregate_Fields>;
  nodes: Array<Encounter_Weakness>;
};

/** aggregate fields of "encounter_weakness" */
export type Encounter_Weakness_Aggregate_Fields = {
  __typename?: 'encounter_weakness_aggregate_fields';
  avg?: Maybe<Encounter_Weakness_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Encounter_Weakness_Max_Fields>;
  min?: Maybe<Encounter_Weakness_Min_Fields>;
  stddev?: Maybe<Encounter_Weakness_Stddev_Fields>;
  stddev_pop?: Maybe<Encounter_Weakness_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Encounter_Weakness_Stddev_Samp_Fields>;
  sum?: Maybe<Encounter_Weakness_Sum_Fields>;
  var_pop?: Maybe<Encounter_Weakness_Var_Pop_Fields>;
  var_samp?: Maybe<Encounter_Weakness_Var_Samp_Fields>;
  variance?: Maybe<Encounter_Weakness_Variance_Fields>;
};


/** aggregate fields of "encounter_weakness" */
export type Encounter_Weakness_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Encounter_Weakness_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "encounter_weakness" */
export type Encounter_Weakness_Aggregate_Order_By = {
  avg?: InputMaybe<Encounter_Weakness_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Encounter_Weakness_Max_Order_By>;
  min?: InputMaybe<Encounter_Weakness_Min_Order_By>;
  stddev?: InputMaybe<Encounter_Weakness_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Encounter_Weakness_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Encounter_Weakness_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Encounter_Weakness_Sum_Order_By>;
  var_pop?: InputMaybe<Encounter_Weakness_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Encounter_Weakness_Var_Samp_Order_By>;
  variance?: InputMaybe<Encounter_Weakness_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "encounter_weakness" */
export type Encounter_Weakness_Arr_Rel_Insert_Input = {
  data: Array<Encounter_Weakness_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Encounter_Weakness_On_Conflict>;
};

/** aggregate avg on columns */
export type Encounter_Weakness_Avg_Fields = {
  __typename?: 'encounter_weakness_avg_fields';
  encounter_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "encounter_weakness" */
export type Encounter_Weakness_Avg_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "encounter_weakness". All fields are combined with a logical 'AND'. */
export type Encounter_Weakness_Bool_Exp = {
  _and?: InputMaybe<Array<Encounter_Weakness_Bool_Exp>>;
  _not?: InputMaybe<Encounter_Weakness_Bool_Exp>;
  _or?: InputMaybe<Array<Encounter_Weakness_Bool_Exp>>;
  encounter?: InputMaybe<Encounters_Bool_Exp>;
  encounter_id?: InputMaybe<Int_Comparison_Exp>;
  rattribute?: InputMaybe<Rattributes_Bool_Exp>;
  weakness?: InputMaybe<Rattributes_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "encounter_weakness" */
export enum Encounter_Weakness_Constraint {
  /** unique or primary key constraint */
  EncounterWeaknessPkey = 'encounter_weakness_pkey'
}

/** input type for incrementing numeric columns in table "encounter_weakness" */
export type Encounter_Weakness_Inc_Input = {
  encounter_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "encounter_weakness" */
export type Encounter_Weakness_Insert_Input = {
  encounter?: InputMaybe<Encounters_Obj_Rel_Insert_Input>;
  encounter_id?: InputMaybe<Scalars['Int']>;
  rattribute?: InputMaybe<Rattributes_Obj_Rel_Insert_Input>;
  weakness?: InputMaybe<Rattributes_Enum>;
};

/** aggregate max on columns */
export type Encounter_Weakness_Max_Fields = {
  __typename?: 'encounter_weakness_max_fields';
  encounter_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "encounter_weakness" */
export type Encounter_Weakness_Max_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Encounter_Weakness_Min_Fields = {
  __typename?: 'encounter_weakness_min_fields';
  encounter_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "encounter_weakness" */
export type Encounter_Weakness_Min_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "encounter_weakness" */
export type Encounter_Weakness_Mutation_Response = {
  __typename?: 'encounter_weakness_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Encounter_Weakness>;
};

/** on conflict condition type for table "encounter_weakness" */
export type Encounter_Weakness_On_Conflict = {
  constraint: Encounter_Weakness_Constraint;
  update_columns?: Array<Encounter_Weakness_Update_Column>;
  where?: InputMaybe<Encounter_Weakness_Bool_Exp>;
};

/** Ordering options when selecting data from "encounter_weakness". */
export type Encounter_Weakness_Order_By = {
  encounter?: InputMaybe<Encounters_Order_By>;
  encounter_id?: InputMaybe<Order_By>;
  rattribute?: InputMaybe<Rattributes_Order_By>;
  weakness?: InputMaybe<Order_By>;
};

/** primary key columns input for table: encounter_weakness */
export type Encounter_Weakness_Pk_Columns_Input = {
  encounter_id: Scalars['Int'];
  weakness: Rattributes_Enum;
};

/** select columns of table "encounter_weakness" */
export enum Encounter_Weakness_Select_Column {
  /** column name */
  EncounterId = 'encounter_id',
  /** column name */
  Weakness = 'weakness'
}

/** input type for updating data in table "encounter_weakness" */
export type Encounter_Weakness_Set_Input = {
  encounter_id?: InputMaybe<Scalars['Int']>;
  weakness?: InputMaybe<Rattributes_Enum>;
};

/** aggregate stddev on columns */
export type Encounter_Weakness_Stddev_Fields = {
  __typename?: 'encounter_weakness_stddev_fields';
  encounter_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "encounter_weakness" */
export type Encounter_Weakness_Stddev_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Encounter_Weakness_Stddev_Pop_Fields = {
  __typename?: 'encounter_weakness_stddev_pop_fields';
  encounter_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "encounter_weakness" */
export type Encounter_Weakness_Stddev_Pop_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Encounter_Weakness_Stddev_Samp_Fields = {
  __typename?: 'encounter_weakness_stddev_samp_fields';
  encounter_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "encounter_weakness" */
export type Encounter_Weakness_Stddev_Samp_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Encounter_Weakness_Sum_Fields = {
  __typename?: 'encounter_weakness_sum_fields';
  encounter_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "encounter_weakness" */
export type Encounter_Weakness_Sum_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
};

/** update columns of table "encounter_weakness" */
export enum Encounter_Weakness_Update_Column {
  /** column name */
  EncounterId = 'encounter_id',
  /** column name */
  Weakness = 'weakness'
}

/** aggregate var_pop on columns */
export type Encounter_Weakness_Var_Pop_Fields = {
  __typename?: 'encounter_weakness_var_pop_fields';
  encounter_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "encounter_weakness" */
export type Encounter_Weakness_Var_Pop_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Encounter_Weakness_Var_Samp_Fields = {
  __typename?: 'encounter_weakness_var_samp_fields';
  encounter_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "encounter_weakness" */
export type Encounter_Weakness_Var_Samp_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Encounter_Weakness_Variance_Fields = {
  __typename?: 'encounter_weakness_variance_fields';
  encounter_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "encounter_weakness" */
export type Encounter_Weakness_Variance_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "encounters" */
export type Encounters = {
  __typename?: 'encounters';
  active: Scalars['Boolean'];
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  /** An object relationship */
  encounterTypeByEncounterType: Encounter_Types;
  /** An array relationship */
  encounter_rat_constraints: Array<Encounter_Rat_Constraints>;
  /** An aggregate relationship */
  encounter_rat_constraints_aggregate: Encounter_Rat_Constraints_Aggregate;
  /** An array relationship */
  encounter_resistances: Array<Encounter_Resistance>;
  /** An aggregate relationship */
  encounter_resistances_aggregate: Encounter_Resistance_Aggregate;
  encounter_type: Encounter_Types_Enum;
  /** An array relationship */
  encounter_weaknesses: Array<Encounter_Weakness>;
  /** An aggregate relationship */
  encounter_weaknesses_aggregate: Encounter_Weakness_Aggregate;
  energy_cost: Scalars['Int'];
  /** fetch data from the table: "gauntlet_attempts" */
  gauntlet_attempts: Array<Gauntlet_Attempts>;
  /** An aggregate relationship */
  gauntlet_attempts_aggregate: Gauntlet_Attempts_Aggregate;
  /** An array relationship */
  gauntlet_encounters: Array<Gauntlet_Encounters>;
  /** An aggregate relationship */
  gauntlet_encounters_aggregate: Gauntlet_Encounters_Aggregate;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  loss_text?: Maybe<Scalars['String']>;
  max_rats: Scalars['Int'];
  name: Scalars['String'];
  power: Scalars['Int'];
  /** An array relationship */
  raids: Array<Raids>;
  /** An aggregate relationship */
  raids_aggregate: Raids_Aggregate;
  /** An object relationship */
  reward: Rewards;
  reward_id: Scalars['Int'];
  /** An array relationship */
  solo_encounter_results: Array<Solo_Encounter_Results>;
  /** An aggregate relationship */
  solo_encounter_results_aggregate: Solo_Encounter_Results_Aggregate;
  updated_at: Scalars['timestamptz'];
  win_text?: Maybe<Scalars['String']>;
};


/** columns and relationships of "encounters" */
export type EncountersEncounter_Rat_ConstraintsArgs = {
  distinct_on?: InputMaybe<Array<Encounter_Rat_Constraints_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Encounter_Rat_Constraints_Order_By>>;
  where?: InputMaybe<Encounter_Rat_Constraints_Bool_Exp>;
};


/** columns and relationships of "encounters" */
export type EncountersEncounter_Rat_Constraints_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Encounter_Rat_Constraints_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Encounter_Rat_Constraints_Order_By>>;
  where?: InputMaybe<Encounter_Rat_Constraints_Bool_Exp>;
};


/** columns and relationships of "encounters" */
export type EncountersEncounter_ResistancesArgs = {
  distinct_on?: InputMaybe<Array<Encounter_Resistance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Encounter_Resistance_Order_By>>;
  where?: InputMaybe<Encounter_Resistance_Bool_Exp>;
};


/** columns and relationships of "encounters" */
export type EncountersEncounter_Resistances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Encounter_Resistance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Encounter_Resistance_Order_By>>;
  where?: InputMaybe<Encounter_Resistance_Bool_Exp>;
};


/** columns and relationships of "encounters" */
export type EncountersEncounter_WeaknessesArgs = {
  distinct_on?: InputMaybe<Array<Encounter_Weakness_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Encounter_Weakness_Order_By>>;
  where?: InputMaybe<Encounter_Weakness_Bool_Exp>;
};


/** columns and relationships of "encounters" */
export type EncountersEncounter_Weaknesses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Encounter_Weakness_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Encounter_Weakness_Order_By>>;
  where?: InputMaybe<Encounter_Weakness_Bool_Exp>;
};


/** columns and relationships of "encounters" */
export type EncountersGauntlet_AttemptsArgs = {
  distinct_on?: InputMaybe<Array<Gauntlet_Attempts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gauntlet_Attempts_Order_By>>;
  where?: InputMaybe<Gauntlet_Attempts_Bool_Exp>;
};


/** columns and relationships of "encounters" */
export type EncountersGauntlet_Attempts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gauntlet_Attempts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gauntlet_Attempts_Order_By>>;
  where?: InputMaybe<Gauntlet_Attempts_Bool_Exp>;
};


/** columns and relationships of "encounters" */
export type EncountersGauntlet_EncountersArgs = {
  distinct_on?: InputMaybe<Array<Gauntlet_Encounters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gauntlet_Encounters_Order_By>>;
  where?: InputMaybe<Gauntlet_Encounters_Bool_Exp>;
};


/** columns and relationships of "encounters" */
export type EncountersGauntlet_Encounters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gauntlet_Encounters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gauntlet_Encounters_Order_By>>;
  where?: InputMaybe<Gauntlet_Encounters_Bool_Exp>;
};


/** columns and relationships of "encounters" */
export type EncountersRaidsArgs = {
  distinct_on?: InputMaybe<Array<Raids_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Raids_Order_By>>;
  where?: InputMaybe<Raids_Bool_Exp>;
};


/** columns and relationships of "encounters" */
export type EncountersRaids_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Raids_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Raids_Order_By>>;
  where?: InputMaybe<Raids_Bool_Exp>;
};


/** columns and relationships of "encounters" */
export type EncountersSolo_Encounter_ResultsArgs = {
  distinct_on?: InputMaybe<Array<Solo_Encounter_Results_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Solo_Encounter_Results_Order_By>>;
  where?: InputMaybe<Solo_Encounter_Results_Bool_Exp>;
};


/** columns and relationships of "encounters" */
export type EncountersSolo_Encounter_Results_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Solo_Encounter_Results_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Solo_Encounter_Results_Order_By>>;
  where?: InputMaybe<Solo_Encounter_Results_Bool_Exp>;
};

/** aggregated selection of "encounters" */
export type Encounters_Aggregate = {
  __typename?: 'encounters_aggregate';
  aggregate?: Maybe<Encounters_Aggregate_Fields>;
  nodes: Array<Encounters>;
};

/** aggregate fields of "encounters" */
export type Encounters_Aggregate_Fields = {
  __typename?: 'encounters_aggregate_fields';
  avg?: Maybe<Encounters_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Encounters_Max_Fields>;
  min?: Maybe<Encounters_Min_Fields>;
  stddev?: Maybe<Encounters_Stddev_Fields>;
  stddev_pop?: Maybe<Encounters_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Encounters_Stddev_Samp_Fields>;
  sum?: Maybe<Encounters_Sum_Fields>;
  var_pop?: Maybe<Encounters_Var_Pop_Fields>;
  var_samp?: Maybe<Encounters_Var_Samp_Fields>;
  variance?: Maybe<Encounters_Variance_Fields>;
};


/** aggregate fields of "encounters" */
export type Encounters_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Encounters_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "encounters" */
export type Encounters_Aggregate_Order_By = {
  avg?: InputMaybe<Encounters_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Encounters_Max_Order_By>;
  min?: InputMaybe<Encounters_Min_Order_By>;
  stddev?: InputMaybe<Encounters_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Encounters_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Encounters_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Encounters_Sum_Order_By>;
  var_pop?: InputMaybe<Encounters_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Encounters_Var_Samp_Order_By>;
  variance?: InputMaybe<Encounters_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "encounters" */
export type Encounters_Arr_Rel_Insert_Input = {
  data: Array<Encounters_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Encounters_On_Conflict>;
};

/** aggregate avg on columns */
export type Encounters_Avg_Fields = {
  __typename?: 'encounters_avg_fields';
  energy_cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  max_rats?: Maybe<Scalars['Float']>;
  power?: Maybe<Scalars['Float']>;
  reward_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "encounters" */
export type Encounters_Avg_Order_By = {
  energy_cost?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_rats?: InputMaybe<Order_By>;
  power?: InputMaybe<Order_By>;
  reward_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "encounters". All fields are combined with a logical 'AND'. */
export type Encounters_Bool_Exp = {
  _and?: InputMaybe<Array<Encounters_Bool_Exp>>;
  _not?: InputMaybe<Encounters_Bool_Exp>;
  _or?: InputMaybe<Array<Encounters_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  encounterTypeByEncounterType?: InputMaybe<Encounter_Types_Bool_Exp>;
  encounter_rat_constraints?: InputMaybe<Encounter_Rat_Constraints_Bool_Exp>;
  encounter_resistances?: InputMaybe<Encounter_Resistance_Bool_Exp>;
  encounter_type?: InputMaybe<Encounter_Types_Enum_Comparison_Exp>;
  encounter_weaknesses?: InputMaybe<Encounter_Weakness_Bool_Exp>;
  energy_cost?: InputMaybe<Int_Comparison_Exp>;
  gauntlet_attempts?: InputMaybe<Gauntlet_Attempts_Bool_Exp>;
  gauntlet_encounters?: InputMaybe<Gauntlet_Encounters_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  loss_text?: InputMaybe<String_Comparison_Exp>;
  max_rats?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  power?: InputMaybe<Int_Comparison_Exp>;
  raids?: InputMaybe<Raids_Bool_Exp>;
  reward?: InputMaybe<Rewards_Bool_Exp>;
  reward_id?: InputMaybe<Int_Comparison_Exp>;
  solo_encounter_results?: InputMaybe<Solo_Encounter_Results_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  win_text?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "encounters" */
export enum Encounters_Constraint {
  /** unique or primary key constraint */
  EncountersPkey = 'encounters_pkey'
}

/** input type for incrementing numeric columns in table "encounters" */
export type Encounters_Inc_Input = {
  energy_cost?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  max_rats?: InputMaybe<Scalars['Int']>;
  power?: InputMaybe<Scalars['Int']>;
  reward_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "encounters" */
export type Encounters_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  encounterTypeByEncounterType?: InputMaybe<Encounter_Types_Obj_Rel_Insert_Input>;
  encounter_rat_constraints?: InputMaybe<Encounter_Rat_Constraints_Arr_Rel_Insert_Input>;
  encounter_resistances?: InputMaybe<Encounter_Resistance_Arr_Rel_Insert_Input>;
  encounter_type?: InputMaybe<Encounter_Types_Enum>;
  encounter_weaknesses?: InputMaybe<Encounter_Weakness_Arr_Rel_Insert_Input>;
  energy_cost?: InputMaybe<Scalars['Int']>;
  gauntlet_attempts?: InputMaybe<Gauntlet_Attempts_Arr_Rel_Insert_Input>;
  gauntlet_encounters?: InputMaybe<Gauntlet_Encounters_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  loss_text?: InputMaybe<Scalars['String']>;
  max_rats?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  power?: InputMaybe<Scalars['Int']>;
  raids?: InputMaybe<Raids_Arr_Rel_Insert_Input>;
  reward?: InputMaybe<Rewards_Obj_Rel_Insert_Input>;
  reward_id?: InputMaybe<Scalars['Int']>;
  solo_encounter_results?: InputMaybe<Solo_Encounter_Results_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  win_text?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Encounters_Max_Fields = {
  __typename?: 'encounters_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  energy_cost?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  loss_text?: Maybe<Scalars['String']>;
  max_rats?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  power?: Maybe<Scalars['Int']>;
  reward_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  win_text?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "encounters" */
export type Encounters_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  energy_cost?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  loss_text?: InputMaybe<Order_By>;
  max_rats?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  power?: InputMaybe<Order_By>;
  reward_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  win_text?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Encounters_Min_Fields = {
  __typename?: 'encounters_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  energy_cost?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  loss_text?: Maybe<Scalars['String']>;
  max_rats?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  power?: Maybe<Scalars['Int']>;
  reward_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  win_text?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "encounters" */
export type Encounters_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  energy_cost?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  loss_text?: InputMaybe<Order_By>;
  max_rats?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  power?: InputMaybe<Order_By>;
  reward_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  win_text?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "encounters" */
export type Encounters_Mutation_Response = {
  __typename?: 'encounters_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Encounters>;
};

/** input type for inserting object relation for remote table "encounters" */
export type Encounters_Obj_Rel_Insert_Input = {
  data: Encounters_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Encounters_On_Conflict>;
};

/** on conflict condition type for table "encounters" */
export type Encounters_On_Conflict = {
  constraint: Encounters_Constraint;
  update_columns?: Array<Encounters_Update_Column>;
  where?: InputMaybe<Encounters_Bool_Exp>;
};

/** Ordering options when selecting data from "encounters". */
export type Encounters_Order_By = {
  active?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  encounterTypeByEncounterType?: InputMaybe<Encounter_Types_Order_By>;
  encounter_rat_constraints_aggregate?: InputMaybe<Encounter_Rat_Constraints_Aggregate_Order_By>;
  encounter_resistances_aggregate?: InputMaybe<Encounter_Resistance_Aggregate_Order_By>;
  encounter_type?: InputMaybe<Order_By>;
  encounter_weaknesses_aggregate?: InputMaybe<Encounter_Weakness_Aggregate_Order_By>;
  energy_cost?: InputMaybe<Order_By>;
  gauntlet_attempts_aggregate?: InputMaybe<Gauntlet_Attempts_Aggregate_Order_By>;
  gauntlet_encounters_aggregate?: InputMaybe<Gauntlet_Encounters_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  loss_text?: InputMaybe<Order_By>;
  max_rats?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  power?: InputMaybe<Order_By>;
  raids_aggregate?: InputMaybe<Raids_Aggregate_Order_By>;
  reward?: InputMaybe<Rewards_Order_By>;
  reward_id?: InputMaybe<Order_By>;
  solo_encounter_results_aggregate?: InputMaybe<Solo_Encounter_Results_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  win_text?: InputMaybe<Order_By>;
};

/** primary key columns input for table: encounters */
export type Encounters_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "encounters" */
export enum Encounters_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  EncounterType = 'encounter_type',
  /** column name */
  EnergyCost = 'energy_cost',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  LossText = 'loss_text',
  /** column name */
  MaxRats = 'max_rats',
  /** column name */
  Name = 'name',
  /** column name */
  Power = 'power',
  /** column name */
  RewardId = 'reward_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WinText = 'win_text'
}

/** input type for updating data in table "encounters" */
export type Encounters_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  encounter_type?: InputMaybe<Encounter_Types_Enum>;
  energy_cost?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  loss_text?: InputMaybe<Scalars['String']>;
  max_rats?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  power?: InputMaybe<Scalars['Int']>;
  reward_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  win_text?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Encounters_Stddev_Fields = {
  __typename?: 'encounters_stddev_fields';
  energy_cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  max_rats?: Maybe<Scalars['Float']>;
  power?: Maybe<Scalars['Float']>;
  reward_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "encounters" */
export type Encounters_Stddev_Order_By = {
  energy_cost?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_rats?: InputMaybe<Order_By>;
  power?: InputMaybe<Order_By>;
  reward_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Encounters_Stddev_Pop_Fields = {
  __typename?: 'encounters_stddev_pop_fields';
  energy_cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  max_rats?: Maybe<Scalars['Float']>;
  power?: Maybe<Scalars['Float']>;
  reward_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "encounters" */
export type Encounters_Stddev_Pop_Order_By = {
  energy_cost?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_rats?: InputMaybe<Order_By>;
  power?: InputMaybe<Order_By>;
  reward_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Encounters_Stddev_Samp_Fields = {
  __typename?: 'encounters_stddev_samp_fields';
  energy_cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  max_rats?: Maybe<Scalars['Float']>;
  power?: Maybe<Scalars['Float']>;
  reward_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "encounters" */
export type Encounters_Stddev_Samp_Order_By = {
  energy_cost?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_rats?: InputMaybe<Order_By>;
  power?: InputMaybe<Order_By>;
  reward_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Encounters_Sum_Fields = {
  __typename?: 'encounters_sum_fields';
  energy_cost?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  max_rats?: Maybe<Scalars['Int']>;
  power?: Maybe<Scalars['Int']>;
  reward_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "encounters" */
export type Encounters_Sum_Order_By = {
  energy_cost?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_rats?: InputMaybe<Order_By>;
  power?: InputMaybe<Order_By>;
  reward_id?: InputMaybe<Order_By>;
};

/** update columns of table "encounters" */
export enum Encounters_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  EncounterType = 'encounter_type',
  /** column name */
  EnergyCost = 'energy_cost',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  LossText = 'loss_text',
  /** column name */
  MaxRats = 'max_rats',
  /** column name */
  Name = 'name',
  /** column name */
  Power = 'power',
  /** column name */
  RewardId = 'reward_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WinText = 'win_text'
}

/** aggregate var_pop on columns */
export type Encounters_Var_Pop_Fields = {
  __typename?: 'encounters_var_pop_fields';
  energy_cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  max_rats?: Maybe<Scalars['Float']>;
  power?: Maybe<Scalars['Float']>;
  reward_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "encounters" */
export type Encounters_Var_Pop_Order_By = {
  energy_cost?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_rats?: InputMaybe<Order_By>;
  power?: InputMaybe<Order_By>;
  reward_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Encounters_Var_Samp_Fields = {
  __typename?: 'encounters_var_samp_fields';
  energy_cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  max_rats?: Maybe<Scalars['Float']>;
  power?: Maybe<Scalars['Float']>;
  reward_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "encounters" */
export type Encounters_Var_Samp_Order_By = {
  energy_cost?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_rats?: InputMaybe<Order_By>;
  power?: InputMaybe<Order_By>;
  reward_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Encounters_Variance_Fields = {
  __typename?: 'encounters_variance_fields';
  energy_cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  max_rats?: Maybe<Scalars['Float']>;
  power?: Maybe<Scalars['Float']>;
  reward_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "encounters" */
export type Encounters_Variance_Order_By = {
  energy_cost?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_rats?: InputMaybe<Order_By>;
  power?: InputMaybe<Order_By>;
  reward_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "gauntlet_attempts" */
export type Gauntlet_Attempts = {
  __typename?: 'gauntlet_attempts';
  completed_timestamp?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  encounter: Encounters;
  /** An object relationship */
  gauntlet: Gauntlets;
  gauntlet_id: Scalars['Int'];
  id: Scalars['bigint'];
  last_attempted_encounter_id: Scalars['Int'];
  /** An object relationship */
  player: Players;
  player_id: Scalars['String'];
  result?: Maybe<Scalars['Boolean']>;
  started_timestamp: Scalars['timestamptz'];
};

/** aggregated selection of "gauntlet_attempts" */
export type Gauntlet_Attempts_Aggregate = {
  __typename?: 'gauntlet_attempts_aggregate';
  aggregate?: Maybe<Gauntlet_Attempts_Aggregate_Fields>;
  nodes: Array<Gauntlet_Attempts>;
};

/** aggregate fields of "gauntlet_attempts" */
export type Gauntlet_Attempts_Aggregate_Fields = {
  __typename?: 'gauntlet_attempts_aggregate_fields';
  avg?: Maybe<Gauntlet_Attempts_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Gauntlet_Attempts_Max_Fields>;
  min?: Maybe<Gauntlet_Attempts_Min_Fields>;
  stddev?: Maybe<Gauntlet_Attempts_Stddev_Fields>;
  stddev_pop?: Maybe<Gauntlet_Attempts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Gauntlet_Attempts_Stddev_Samp_Fields>;
  sum?: Maybe<Gauntlet_Attempts_Sum_Fields>;
  var_pop?: Maybe<Gauntlet_Attempts_Var_Pop_Fields>;
  var_samp?: Maybe<Gauntlet_Attempts_Var_Samp_Fields>;
  variance?: Maybe<Gauntlet_Attempts_Variance_Fields>;
};


/** aggregate fields of "gauntlet_attempts" */
export type Gauntlet_Attempts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Gauntlet_Attempts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "gauntlet_attempts" */
export type Gauntlet_Attempts_Aggregate_Order_By = {
  avg?: InputMaybe<Gauntlet_Attempts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Gauntlet_Attempts_Max_Order_By>;
  min?: InputMaybe<Gauntlet_Attempts_Min_Order_By>;
  stddev?: InputMaybe<Gauntlet_Attempts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Gauntlet_Attempts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Gauntlet_Attempts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Gauntlet_Attempts_Sum_Order_By>;
  var_pop?: InputMaybe<Gauntlet_Attempts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Gauntlet_Attempts_Var_Samp_Order_By>;
  variance?: InputMaybe<Gauntlet_Attempts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "gauntlet_attempts" */
export type Gauntlet_Attempts_Arr_Rel_Insert_Input = {
  data: Array<Gauntlet_Attempts_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Gauntlet_Attempts_On_Conflict>;
};

/** aggregate avg on columns */
export type Gauntlet_Attempts_Avg_Fields = {
  __typename?: 'gauntlet_attempts_avg_fields';
  gauntlet_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  last_attempted_encounter_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "gauntlet_attempts" */
export type Gauntlet_Attempts_Avg_Order_By = {
  gauntlet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_attempted_encounter_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "gauntlet_attempts". All fields are combined with a logical 'AND'. */
export type Gauntlet_Attempts_Bool_Exp = {
  _and?: InputMaybe<Array<Gauntlet_Attempts_Bool_Exp>>;
  _not?: InputMaybe<Gauntlet_Attempts_Bool_Exp>;
  _or?: InputMaybe<Array<Gauntlet_Attempts_Bool_Exp>>;
  completed_timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  encounter?: InputMaybe<Encounters_Bool_Exp>;
  gauntlet?: InputMaybe<Gauntlets_Bool_Exp>;
  gauntlet_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  last_attempted_encounter_id?: InputMaybe<Int_Comparison_Exp>;
  player?: InputMaybe<Players_Bool_Exp>;
  player_id?: InputMaybe<String_Comparison_Exp>;
  result?: InputMaybe<Boolean_Comparison_Exp>;
  started_timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "gauntlet_attempts" */
export enum Gauntlet_Attempts_Constraint {
  /** unique or primary key constraint */
  GauntletAttemptsPkey = 'gauntlet_attempts_pkey'
}

/** input type for incrementing numeric columns in table "gauntlet_attempts" */
export type Gauntlet_Attempts_Inc_Input = {
  gauntlet_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  last_attempted_encounter_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "gauntlet_attempts" */
export type Gauntlet_Attempts_Insert_Input = {
  completed_timestamp?: InputMaybe<Scalars['timestamptz']>;
  encounter?: InputMaybe<Encounters_Obj_Rel_Insert_Input>;
  gauntlet?: InputMaybe<Gauntlets_Obj_Rel_Insert_Input>;
  gauntlet_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  last_attempted_encounter_id?: InputMaybe<Scalars['Int']>;
  player?: InputMaybe<Players_Obj_Rel_Insert_Input>;
  player_id?: InputMaybe<Scalars['String']>;
  result?: InputMaybe<Scalars['Boolean']>;
  started_timestamp?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Gauntlet_Attempts_Max_Fields = {
  __typename?: 'gauntlet_attempts_max_fields';
  completed_timestamp?: Maybe<Scalars['timestamptz']>;
  gauntlet_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  last_attempted_encounter_id?: Maybe<Scalars['Int']>;
  player_id?: Maybe<Scalars['String']>;
  started_timestamp?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "gauntlet_attempts" */
export type Gauntlet_Attempts_Max_Order_By = {
  completed_timestamp?: InputMaybe<Order_By>;
  gauntlet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_attempted_encounter_id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  started_timestamp?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Gauntlet_Attempts_Min_Fields = {
  __typename?: 'gauntlet_attempts_min_fields';
  completed_timestamp?: Maybe<Scalars['timestamptz']>;
  gauntlet_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  last_attempted_encounter_id?: Maybe<Scalars['Int']>;
  player_id?: Maybe<Scalars['String']>;
  started_timestamp?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "gauntlet_attempts" */
export type Gauntlet_Attempts_Min_Order_By = {
  completed_timestamp?: InputMaybe<Order_By>;
  gauntlet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_attempted_encounter_id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  started_timestamp?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "gauntlet_attempts" */
export type Gauntlet_Attempts_Mutation_Response = {
  __typename?: 'gauntlet_attempts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Gauntlet_Attempts>;
};

/** on conflict condition type for table "gauntlet_attempts" */
export type Gauntlet_Attempts_On_Conflict = {
  constraint: Gauntlet_Attempts_Constraint;
  update_columns?: Array<Gauntlet_Attempts_Update_Column>;
  where?: InputMaybe<Gauntlet_Attempts_Bool_Exp>;
};

/** Ordering options when selecting data from "gauntlet_attempts". */
export type Gauntlet_Attempts_Order_By = {
  completed_timestamp?: InputMaybe<Order_By>;
  encounter?: InputMaybe<Encounters_Order_By>;
  gauntlet?: InputMaybe<Gauntlets_Order_By>;
  gauntlet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_attempted_encounter_id?: InputMaybe<Order_By>;
  player?: InputMaybe<Players_Order_By>;
  player_id?: InputMaybe<Order_By>;
  result?: InputMaybe<Order_By>;
  started_timestamp?: InputMaybe<Order_By>;
};

/** primary key columns input for table: gauntlet_attempts */
export type Gauntlet_Attempts_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "gauntlet_attempts" */
export enum Gauntlet_Attempts_Select_Column {
  /** column name */
  CompletedTimestamp = 'completed_timestamp',
  /** column name */
  GauntletId = 'gauntlet_id',
  /** column name */
  Id = 'id',
  /** column name */
  LastAttemptedEncounterId = 'last_attempted_encounter_id',
  /** column name */
  PlayerId = 'player_id',
  /** column name */
  Result = 'result',
  /** column name */
  StartedTimestamp = 'started_timestamp'
}

/** input type for updating data in table "gauntlet_attempts" */
export type Gauntlet_Attempts_Set_Input = {
  completed_timestamp?: InputMaybe<Scalars['timestamptz']>;
  gauntlet_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  last_attempted_encounter_id?: InputMaybe<Scalars['Int']>;
  player_id?: InputMaybe<Scalars['String']>;
  result?: InputMaybe<Scalars['Boolean']>;
  started_timestamp?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Gauntlet_Attempts_Stddev_Fields = {
  __typename?: 'gauntlet_attempts_stddev_fields';
  gauntlet_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  last_attempted_encounter_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "gauntlet_attempts" */
export type Gauntlet_Attempts_Stddev_Order_By = {
  gauntlet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_attempted_encounter_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Gauntlet_Attempts_Stddev_Pop_Fields = {
  __typename?: 'gauntlet_attempts_stddev_pop_fields';
  gauntlet_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  last_attempted_encounter_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "gauntlet_attempts" */
export type Gauntlet_Attempts_Stddev_Pop_Order_By = {
  gauntlet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_attempted_encounter_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Gauntlet_Attempts_Stddev_Samp_Fields = {
  __typename?: 'gauntlet_attempts_stddev_samp_fields';
  gauntlet_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  last_attempted_encounter_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "gauntlet_attempts" */
export type Gauntlet_Attempts_Stddev_Samp_Order_By = {
  gauntlet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_attempted_encounter_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Gauntlet_Attempts_Sum_Fields = {
  __typename?: 'gauntlet_attempts_sum_fields';
  gauntlet_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  last_attempted_encounter_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "gauntlet_attempts" */
export type Gauntlet_Attempts_Sum_Order_By = {
  gauntlet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_attempted_encounter_id?: InputMaybe<Order_By>;
};

/** update columns of table "gauntlet_attempts" */
export enum Gauntlet_Attempts_Update_Column {
  /** column name */
  CompletedTimestamp = 'completed_timestamp',
  /** column name */
  GauntletId = 'gauntlet_id',
  /** column name */
  Id = 'id',
  /** column name */
  LastAttemptedEncounterId = 'last_attempted_encounter_id',
  /** column name */
  PlayerId = 'player_id',
  /** column name */
  Result = 'result',
  /** column name */
  StartedTimestamp = 'started_timestamp'
}

/** aggregate var_pop on columns */
export type Gauntlet_Attempts_Var_Pop_Fields = {
  __typename?: 'gauntlet_attempts_var_pop_fields';
  gauntlet_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  last_attempted_encounter_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "gauntlet_attempts" */
export type Gauntlet_Attempts_Var_Pop_Order_By = {
  gauntlet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_attempted_encounter_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Gauntlet_Attempts_Var_Samp_Fields = {
  __typename?: 'gauntlet_attempts_var_samp_fields';
  gauntlet_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  last_attempted_encounter_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "gauntlet_attempts" */
export type Gauntlet_Attempts_Var_Samp_Order_By = {
  gauntlet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_attempted_encounter_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Gauntlet_Attempts_Variance_Fields = {
  __typename?: 'gauntlet_attempts_variance_fields';
  gauntlet_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  last_attempted_encounter_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "gauntlet_attempts" */
export type Gauntlet_Attempts_Variance_Order_By = {
  gauntlet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_attempted_encounter_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "gauntlet_encounters" */
export type Gauntlet_Encounters = {
  __typename?: 'gauntlet_encounters';
  /** An object relationship */
  encounter: Encounters;
  encounter_id: Scalars['Int'];
  /** An object relationship */
  gauntlet: Gauntlets;
  gauntlet_id: Scalars['Int'];
  position: Scalars['Int'];
};

/** aggregated selection of "gauntlet_encounters" */
export type Gauntlet_Encounters_Aggregate = {
  __typename?: 'gauntlet_encounters_aggregate';
  aggregate?: Maybe<Gauntlet_Encounters_Aggregate_Fields>;
  nodes: Array<Gauntlet_Encounters>;
};

/** aggregate fields of "gauntlet_encounters" */
export type Gauntlet_Encounters_Aggregate_Fields = {
  __typename?: 'gauntlet_encounters_aggregate_fields';
  avg?: Maybe<Gauntlet_Encounters_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Gauntlet_Encounters_Max_Fields>;
  min?: Maybe<Gauntlet_Encounters_Min_Fields>;
  stddev?: Maybe<Gauntlet_Encounters_Stddev_Fields>;
  stddev_pop?: Maybe<Gauntlet_Encounters_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Gauntlet_Encounters_Stddev_Samp_Fields>;
  sum?: Maybe<Gauntlet_Encounters_Sum_Fields>;
  var_pop?: Maybe<Gauntlet_Encounters_Var_Pop_Fields>;
  var_samp?: Maybe<Gauntlet_Encounters_Var_Samp_Fields>;
  variance?: Maybe<Gauntlet_Encounters_Variance_Fields>;
};


/** aggregate fields of "gauntlet_encounters" */
export type Gauntlet_Encounters_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Gauntlet_Encounters_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "gauntlet_encounters" */
export type Gauntlet_Encounters_Aggregate_Order_By = {
  avg?: InputMaybe<Gauntlet_Encounters_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Gauntlet_Encounters_Max_Order_By>;
  min?: InputMaybe<Gauntlet_Encounters_Min_Order_By>;
  stddev?: InputMaybe<Gauntlet_Encounters_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Gauntlet_Encounters_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Gauntlet_Encounters_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Gauntlet_Encounters_Sum_Order_By>;
  var_pop?: InputMaybe<Gauntlet_Encounters_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Gauntlet_Encounters_Var_Samp_Order_By>;
  variance?: InputMaybe<Gauntlet_Encounters_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "gauntlet_encounters" */
export type Gauntlet_Encounters_Arr_Rel_Insert_Input = {
  data: Array<Gauntlet_Encounters_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Gauntlet_Encounters_On_Conflict>;
};

/** aggregate avg on columns */
export type Gauntlet_Encounters_Avg_Fields = {
  __typename?: 'gauntlet_encounters_avg_fields';
  encounter_id?: Maybe<Scalars['Float']>;
  gauntlet_id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "gauntlet_encounters" */
export type Gauntlet_Encounters_Avg_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
  gauntlet_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "gauntlet_encounters". All fields are combined with a logical 'AND'. */
export type Gauntlet_Encounters_Bool_Exp = {
  _and?: InputMaybe<Array<Gauntlet_Encounters_Bool_Exp>>;
  _not?: InputMaybe<Gauntlet_Encounters_Bool_Exp>;
  _or?: InputMaybe<Array<Gauntlet_Encounters_Bool_Exp>>;
  encounter?: InputMaybe<Encounters_Bool_Exp>;
  encounter_id?: InputMaybe<Int_Comparison_Exp>;
  gauntlet?: InputMaybe<Gauntlets_Bool_Exp>;
  gauntlet_id?: InputMaybe<Int_Comparison_Exp>;
  position?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "gauntlet_encounters" */
export enum Gauntlet_Encounters_Constraint {
  /** unique or primary key constraint */
  GauntletEncountersPkey = 'gauntlet_encounters_pkey'
}

/** input type for incrementing numeric columns in table "gauntlet_encounters" */
export type Gauntlet_Encounters_Inc_Input = {
  encounter_id?: InputMaybe<Scalars['Int']>;
  gauntlet_id?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "gauntlet_encounters" */
export type Gauntlet_Encounters_Insert_Input = {
  encounter?: InputMaybe<Encounters_Obj_Rel_Insert_Input>;
  encounter_id?: InputMaybe<Scalars['Int']>;
  gauntlet?: InputMaybe<Gauntlets_Obj_Rel_Insert_Input>;
  gauntlet_id?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Gauntlet_Encounters_Max_Fields = {
  __typename?: 'gauntlet_encounters_max_fields';
  encounter_id?: Maybe<Scalars['Int']>;
  gauntlet_id?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "gauntlet_encounters" */
export type Gauntlet_Encounters_Max_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
  gauntlet_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Gauntlet_Encounters_Min_Fields = {
  __typename?: 'gauntlet_encounters_min_fields';
  encounter_id?: Maybe<Scalars['Int']>;
  gauntlet_id?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "gauntlet_encounters" */
export type Gauntlet_Encounters_Min_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
  gauntlet_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "gauntlet_encounters" */
export type Gauntlet_Encounters_Mutation_Response = {
  __typename?: 'gauntlet_encounters_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Gauntlet_Encounters>;
};

/** on conflict condition type for table "gauntlet_encounters" */
export type Gauntlet_Encounters_On_Conflict = {
  constraint: Gauntlet_Encounters_Constraint;
  update_columns?: Array<Gauntlet_Encounters_Update_Column>;
  where?: InputMaybe<Gauntlet_Encounters_Bool_Exp>;
};

/** Ordering options when selecting data from "gauntlet_encounters". */
export type Gauntlet_Encounters_Order_By = {
  encounter?: InputMaybe<Encounters_Order_By>;
  encounter_id?: InputMaybe<Order_By>;
  gauntlet?: InputMaybe<Gauntlets_Order_By>;
  gauntlet_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** primary key columns input for table: gauntlet_encounters */
export type Gauntlet_Encounters_Pk_Columns_Input = {
  encounter_id: Scalars['Int'];
  gauntlet_id: Scalars['Int'];
  position: Scalars['Int'];
};

/** select columns of table "gauntlet_encounters" */
export enum Gauntlet_Encounters_Select_Column {
  /** column name */
  EncounterId = 'encounter_id',
  /** column name */
  GauntletId = 'gauntlet_id',
  /** column name */
  Position = 'position'
}

/** input type for updating data in table "gauntlet_encounters" */
export type Gauntlet_Encounters_Set_Input = {
  encounter_id?: InputMaybe<Scalars['Int']>;
  gauntlet_id?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Gauntlet_Encounters_Stddev_Fields = {
  __typename?: 'gauntlet_encounters_stddev_fields';
  encounter_id?: Maybe<Scalars['Float']>;
  gauntlet_id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "gauntlet_encounters" */
export type Gauntlet_Encounters_Stddev_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
  gauntlet_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Gauntlet_Encounters_Stddev_Pop_Fields = {
  __typename?: 'gauntlet_encounters_stddev_pop_fields';
  encounter_id?: Maybe<Scalars['Float']>;
  gauntlet_id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "gauntlet_encounters" */
export type Gauntlet_Encounters_Stddev_Pop_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
  gauntlet_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Gauntlet_Encounters_Stddev_Samp_Fields = {
  __typename?: 'gauntlet_encounters_stddev_samp_fields';
  encounter_id?: Maybe<Scalars['Float']>;
  gauntlet_id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "gauntlet_encounters" */
export type Gauntlet_Encounters_Stddev_Samp_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
  gauntlet_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Gauntlet_Encounters_Sum_Fields = {
  __typename?: 'gauntlet_encounters_sum_fields';
  encounter_id?: Maybe<Scalars['Int']>;
  gauntlet_id?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "gauntlet_encounters" */
export type Gauntlet_Encounters_Sum_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
  gauntlet_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** update columns of table "gauntlet_encounters" */
export enum Gauntlet_Encounters_Update_Column {
  /** column name */
  EncounterId = 'encounter_id',
  /** column name */
  GauntletId = 'gauntlet_id',
  /** column name */
  Position = 'position'
}

/** aggregate var_pop on columns */
export type Gauntlet_Encounters_Var_Pop_Fields = {
  __typename?: 'gauntlet_encounters_var_pop_fields';
  encounter_id?: Maybe<Scalars['Float']>;
  gauntlet_id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "gauntlet_encounters" */
export type Gauntlet_Encounters_Var_Pop_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
  gauntlet_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Gauntlet_Encounters_Var_Samp_Fields = {
  __typename?: 'gauntlet_encounters_var_samp_fields';
  encounter_id?: Maybe<Scalars['Float']>;
  gauntlet_id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "gauntlet_encounters" */
export type Gauntlet_Encounters_Var_Samp_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
  gauntlet_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Gauntlet_Encounters_Variance_Fields = {
  __typename?: 'gauntlet_encounters_variance_fields';
  encounter_id?: Maybe<Scalars['Float']>;
  gauntlet_id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "gauntlet_encounters" */
export type Gauntlet_Encounters_Variance_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
  gauntlet_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** columns and relationships of "gauntlets" */
export type Gauntlets = {
  __typename?: 'gauntlets';
  active: Scalars['Boolean'];
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  /** fetch data from the table: "gauntlet_attempts" */
  gauntlet_attempts: Array<Gauntlet_Attempts>;
  /** An aggregate relationship */
  gauntlet_attempts_aggregate: Gauntlet_Attempts_Aggregate;
  /** An array relationship */
  gauntlet_encounters: Array<Gauntlet_Encounters>;
  /** An aggregate relationship */
  gauntlet_encounters_aggregate: Gauntlet_Encounters_Aggregate;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  loss_text?: Maybe<Scalars['String']>;
  /** An object relationship */
  reward: Rewards;
  reward_id: Scalars['Int'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  win_text?: Maybe<Scalars['String']>;
};


/** columns and relationships of "gauntlets" */
export type GauntletsGauntlet_AttemptsArgs = {
  distinct_on?: InputMaybe<Array<Gauntlet_Attempts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gauntlet_Attempts_Order_By>>;
  where?: InputMaybe<Gauntlet_Attempts_Bool_Exp>;
};


/** columns and relationships of "gauntlets" */
export type GauntletsGauntlet_Attempts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gauntlet_Attempts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gauntlet_Attempts_Order_By>>;
  where?: InputMaybe<Gauntlet_Attempts_Bool_Exp>;
};


/** columns and relationships of "gauntlets" */
export type GauntletsGauntlet_EncountersArgs = {
  distinct_on?: InputMaybe<Array<Gauntlet_Encounters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gauntlet_Encounters_Order_By>>;
  where?: InputMaybe<Gauntlet_Encounters_Bool_Exp>;
};


/** columns and relationships of "gauntlets" */
export type GauntletsGauntlet_Encounters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gauntlet_Encounters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gauntlet_Encounters_Order_By>>;
  where?: InputMaybe<Gauntlet_Encounters_Bool_Exp>;
};

/** aggregated selection of "gauntlets" */
export type Gauntlets_Aggregate = {
  __typename?: 'gauntlets_aggregate';
  aggregate?: Maybe<Gauntlets_Aggregate_Fields>;
  nodes: Array<Gauntlets>;
};

/** aggregate fields of "gauntlets" */
export type Gauntlets_Aggregate_Fields = {
  __typename?: 'gauntlets_aggregate_fields';
  avg?: Maybe<Gauntlets_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Gauntlets_Max_Fields>;
  min?: Maybe<Gauntlets_Min_Fields>;
  stddev?: Maybe<Gauntlets_Stddev_Fields>;
  stddev_pop?: Maybe<Gauntlets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Gauntlets_Stddev_Samp_Fields>;
  sum?: Maybe<Gauntlets_Sum_Fields>;
  var_pop?: Maybe<Gauntlets_Var_Pop_Fields>;
  var_samp?: Maybe<Gauntlets_Var_Samp_Fields>;
  variance?: Maybe<Gauntlets_Variance_Fields>;
};


/** aggregate fields of "gauntlets" */
export type Gauntlets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Gauntlets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "gauntlets" */
export type Gauntlets_Aggregate_Order_By = {
  avg?: InputMaybe<Gauntlets_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Gauntlets_Max_Order_By>;
  min?: InputMaybe<Gauntlets_Min_Order_By>;
  stddev?: InputMaybe<Gauntlets_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Gauntlets_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Gauntlets_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Gauntlets_Sum_Order_By>;
  var_pop?: InputMaybe<Gauntlets_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Gauntlets_Var_Samp_Order_By>;
  variance?: InputMaybe<Gauntlets_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "gauntlets" */
export type Gauntlets_Arr_Rel_Insert_Input = {
  data: Array<Gauntlets_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Gauntlets_On_Conflict>;
};

/** aggregate avg on columns */
export type Gauntlets_Avg_Fields = {
  __typename?: 'gauntlets_avg_fields';
  id?: Maybe<Scalars['Float']>;
  reward_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "gauntlets" */
export type Gauntlets_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  reward_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "gauntlets". All fields are combined with a logical 'AND'. */
export type Gauntlets_Bool_Exp = {
  _and?: InputMaybe<Array<Gauntlets_Bool_Exp>>;
  _not?: InputMaybe<Gauntlets_Bool_Exp>;
  _or?: InputMaybe<Array<Gauntlets_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  gauntlet_attempts?: InputMaybe<Gauntlet_Attempts_Bool_Exp>;
  gauntlet_encounters?: InputMaybe<Gauntlet_Encounters_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  loss_text?: InputMaybe<String_Comparison_Exp>;
  reward?: InputMaybe<Rewards_Bool_Exp>;
  reward_id?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  win_text?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "gauntlets" */
export enum Gauntlets_Constraint {
  /** unique or primary key constraint */
  GauntletsPkey = 'gauntlets_pkey'
}

/** input type for incrementing numeric columns in table "gauntlets" */
export type Gauntlets_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  reward_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "gauntlets" */
export type Gauntlets_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  gauntlet_attempts?: InputMaybe<Gauntlet_Attempts_Arr_Rel_Insert_Input>;
  gauntlet_encounters?: InputMaybe<Gauntlet_Encounters_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  loss_text?: InputMaybe<Scalars['String']>;
  reward?: InputMaybe<Rewards_Obj_Rel_Insert_Input>;
  reward_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  win_text?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Gauntlets_Max_Fields = {
  __typename?: 'gauntlets_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  loss_text?: Maybe<Scalars['String']>;
  reward_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  win_text?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "gauntlets" */
export type Gauntlets_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  loss_text?: InputMaybe<Order_By>;
  reward_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  win_text?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Gauntlets_Min_Fields = {
  __typename?: 'gauntlets_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  loss_text?: Maybe<Scalars['String']>;
  reward_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  win_text?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "gauntlets" */
export type Gauntlets_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  loss_text?: InputMaybe<Order_By>;
  reward_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  win_text?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "gauntlets" */
export type Gauntlets_Mutation_Response = {
  __typename?: 'gauntlets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Gauntlets>;
};

/** input type for inserting object relation for remote table "gauntlets" */
export type Gauntlets_Obj_Rel_Insert_Input = {
  data: Gauntlets_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Gauntlets_On_Conflict>;
};

/** on conflict condition type for table "gauntlets" */
export type Gauntlets_On_Conflict = {
  constraint: Gauntlets_Constraint;
  update_columns?: Array<Gauntlets_Update_Column>;
  where?: InputMaybe<Gauntlets_Bool_Exp>;
};

/** Ordering options when selecting data from "gauntlets". */
export type Gauntlets_Order_By = {
  active?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  gauntlet_attempts_aggregate?: InputMaybe<Gauntlet_Attempts_Aggregate_Order_By>;
  gauntlet_encounters_aggregate?: InputMaybe<Gauntlet_Encounters_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  loss_text?: InputMaybe<Order_By>;
  reward?: InputMaybe<Rewards_Order_By>;
  reward_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  win_text?: InputMaybe<Order_By>;
};

/** primary key columns input for table: gauntlets */
export type Gauntlets_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "gauntlets" */
export enum Gauntlets_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  LossText = 'loss_text',
  /** column name */
  RewardId = 'reward_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WinText = 'win_text'
}

/** input type for updating data in table "gauntlets" */
export type Gauntlets_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  loss_text?: InputMaybe<Scalars['String']>;
  reward_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  win_text?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Gauntlets_Stddev_Fields = {
  __typename?: 'gauntlets_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  reward_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "gauntlets" */
export type Gauntlets_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  reward_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Gauntlets_Stddev_Pop_Fields = {
  __typename?: 'gauntlets_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  reward_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "gauntlets" */
export type Gauntlets_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  reward_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Gauntlets_Stddev_Samp_Fields = {
  __typename?: 'gauntlets_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  reward_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "gauntlets" */
export type Gauntlets_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  reward_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Gauntlets_Sum_Fields = {
  __typename?: 'gauntlets_sum_fields';
  id?: Maybe<Scalars['Int']>;
  reward_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "gauntlets" */
export type Gauntlets_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  reward_id?: InputMaybe<Order_By>;
};

/** update columns of table "gauntlets" */
export enum Gauntlets_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  LossText = 'loss_text',
  /** column name */
  RewardId = 'reward_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WinText = 'win_text'
}

/** aggregate var_pop on columns */
export type Gauntlets_Var_Pop_Fields = {
  __typename?: 'gauntlets_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  reward_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "gauntlets" */
export type Gauntlets_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  reward_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Gauntlets_Var_Samp_Fields = {
  __typename?: 'gauntlets_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  reward_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "gauntlets" */
export type Gauntlets_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  reward_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Gauntlets_Variance_Fields = {
  __typename?: 'gauntlets_variance_fields';
  id?: Maybe<Scalars['Float']>;
  reward_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "gauntlets" */
export type Gauntlets_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  reward_id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "encounter_rat_constraints" */
  delete_encounter_rat_constraints?: Maybe<Encounter_Rat_Constraints_Mutation_Response>;
  /** delete single row from the table: "encounter_rat_constraints" */
  delete_encounter_rat_constraints_by_pk?: Maybe<Encounter_Rat_Constraints>;
  /** delete data from the table: "encounter_resistance" */
  delete_encounter_resistance?: Maybe<Encounter_Resistance_Mutation_Response>;
  /** delete single row from the table: "encounter_resistance" */
  delete_encounter_resistance_by_pk?: Maybe<Encounter_Resistance>;
  /** delete data from the table: "encounter_types" */
  delete_encounter_types?: Maybe<Encounter_Types_Mutation_Response>;
  /** delete single row from the table: "encounter_types" */
  delete_encounter_types_by_pk?: Maybe<Encounter_Types>;
  /** delete data from the table: "encounter_weakness" */
  delete_encounter_weakness?: Maybe<Encounter_Weakness_Mutation_Response>;
  /** delete single row from the table: "encounter_weakness" */
  delete_encounter_weakness_by_pk?: Maybe<Encounter_Weakness>;
  /** delete data from the table: "encounters" */
  delete_encounters?: Maybe<Encounters_Mutation_Response>;
  /** delete single row from the table: "encounters" */
  delete_encounters_by_pk?: Maybe<Encounters>;
  /** delete data from the table: "gauntlet_attempts" */
  delete_gauntlet_attempts?: Maybe<Gauntlet_Attempts_Mutation_Response>;
  /** delete single row from the table: "gauntlet_attempts" */
  delete_gauntlet_attempts_by_pk?: Maybe<Gauntlet_Attempts>;
  /** delete data from the table: "gauntlet_encounters" */
  delete_gauntlet_encounters?: Maybe<Gauntlet_Encounters_Mutation_Response>;
  /** delete single row from the table: "gauntlet_encounters" */
  delete_gauntlet_encounters_by_pk?: Maybe<Gauntlet_Encounters>;
  /** delete data from the table: "gauntlets" */
  delete_gauntlets?: Maybe<Gauntlets_Mutation_Response>;
  /** delete single row from the table: "gauntlets" */
  delete_gauntlets_by_pk?: Maybe<Gauntlets>;
  /** delete data from the table: "players" */
  delete_players?: Maybe<Players_Mutation_Response>;
  /** delete single row from the table: "players" */
  delete_players_by_pk?: Maybe<Players>;
  /** delete data from the table: "raid_contributions" */
  delete_raid_contributions?: Maybe<Raid_Contributions_Mutation_Response>;
  /** delete single row from the table: "raid_contributions" */
  delete_raid_contributions_by_pk?: Maybe<Raid_Contributions>;
  /** delete data from the table: "raids" */
  delete_raids?: Maybe<Raids_Mutation_Response>;
  /** delete single row from the table: "raids" */
  delete_raids_by_pk?: Maybe<Raids>;
  /** delete data from the table: "rat_types" */
  delete_rat_types?: Maybe<Rat_Types_Mutation_Response>;
  /** delete single row from the table: "rat_types" */
  delete_rat_types_by_pk?: Maybe<Rat_Types>;
  /** delete data from the table: "rattributes" */
  delete_rattributes?: Maybe<Rattributes_Mutation_Response>;
  /** delete single row from the table: "rattributes" */
  delete_rattributes_by_pk?: Maybe<Rattributes>;
  /** delete data from the table: "rewards" */
  delete_rewards?: Maybe<Rewards_Mutation_Response>;
  /** delete single row from the table: "rewards" */
  delete_rewards_by_pk?: Maybe<Rewards>;
  /** delete data from the table: "solo_encounter_results" */
  delete_solo_encounter_results?: Maybe<Solo_Encounter_Results_Mutation_Response>;
  /** delete single row from the table: "solo_encounter_results" */
  delete_solo_encounter_results_by_pk?: Maybe<Solo_Encounter_Results>;
  /** insert data into the table: "encounter_rat_constraints" */
  insert_encounter_rat_constraints?: Maybe<Encounter_Rat_Constraints_Mutation_Response>;
  /** insert a single row into the table: "encounter_rat_constraints" */
  insert_encounter_rat_constraints_one?: Maybe<Encounter_Rat_Constraints>;
  /** insert data into the table: "encounter_resistance" */
  insert_encounter_resistance?: Maybe<Encounter_Resistance_Mutation_Response>;
  /** insert a single row into the table: "encounter_resistance" */
  insert_encounter_resistance_one?: Maybe<Encounter_Resistance>;
  /** insert data into the table: "encounter_types" */
  insert_encounter_types?: Maybe<Encounter_Types_Mutation_Response>;
  /** insert a single row into the table: "encounter_types" */
  insert_encounter_types_one?: Maybe<Encounter_Types>;
  /** insert data into the table: "encounter_weakness" */
  insert_encounter_weakness?: Maybe<Encounter_Weakness_Mutation_Response>;
  /** insert a single row into the table: "encounter_weakness" */
  insert_encounter_weakness_one?: Maybe<Encounter_Weakness>;
  /** insert data into the table: "encounters" */
  insert_encounters?: Maybe<Encounters_Mutation_Response>;
  /** insert a single row into the table: "encounters" */
  insert_encounters_one?: Maybe<Encounters>;
  /** insert data into the table: "gauntlet_attempts" */
  insert_gauntlet_attempts?: Maybe<Gauntlet_Attempts_Mutation_Response>;
  /** insert a single row into the table: "gauntlet_attempts" */
  insert_gauntlet_attempts_one?: Maybe<Gauntlet_Attempts>;
  /** insert data into the table: "gauntlet_encounters" */
  insert_gauntlet_encounters?: Maybe<Gauntlet_Encounters_Mutation_Response>;
  /** insert a single row into the table: "gauntlet_encounters" */
  insert_gauntlet_encounters_one?: Maybe<Gauntlet_Encounters>;
  /** insert data into the table: "gauntlets" */
  insert_gauntlets?: Maybe<Gauntlets_Mutation_Response>;
  /** insert a single row into the table: "gauntlets" */
  insert_gauntlets_one?: Maybe<Gauntlets>;
  /** insert data into the table: "players" */
  insert_players?: Maybe<Players_Mutation_Response>;
  /** insert a single row into the table: "players" */
  insert_players_one?: Maybe<Players>;
  /** insert data into the table: "raid_contributions" */
  insert_raid_contributions?: Maybe<Raid_Contributions_Mutation_Response>;
  /** insert a single row into the table: "raid_contributions" */
  insert_raid_contributions_one?: Maybe<Raid_Contributions>;
  /** insert data into the table: "raids" */
  insert_raids?: Maybe<Raids_Mutation_Response>;
  /** insert a single row into the table: "raids" */
  insert_raids_one?: Maybe<Raids>;
  /** insert data into the table: "rat_types" */
  insert_rat_types?: Maybe<Rat_Types_Mutation_Response>;
  /** insert a single row into the table: "rat_types" */
  insert_rat_types_one?: Maybe<Rat_Types>;
  /** insert data into the table: "rattributes" */
  insert_rattributes?: Maybe<Rattributes_Mutation_Response>;
  /** insert a single row into the table: "rattributes" */
  insert_rattributes_one?: Maybe<Rattributes>;
  /** insert data into the table: "rewards" */
  insert_rewards?: Maybe<Rewards_Mutation_Response>;
  /** insert a single row into the table: "rewards" */
  insert_rewards_one?: Maybe<Rewards>;
  /** insert data into the table: "solo_encounter_results" */
  insert_solo_encounter_results?: Maybe<Solo_Encounter_Results_Mutation_Response>;
  /** insert a single row into the table: "solo_encounter_results" */
  insert_solo_encounter_results_one?: Maybe<Solo_Encounter_Results>;
  login?: Maybe<LoginOutput>;
  /** update data of the table: "encounter_rat_constraints" */
  update_encounter_rat_constraints?: Maybe<Encounter_Rat_Constraints_Mutation_Response>;
  /** update single row of the table: "encounter_rat_constraints" */
  update_encounter_rat_constraints_by_pk?: Maybe<Encounter_Rat_Constraints>;
  /** update data of the table: "encounter_resistance" */
  update_encounter_resistance?: Maybe<Encounter_Resistance_Mutation_Response>;
  /** update single row of the table: "encounter_resistance" */
  update_encounter_resistance_by_pk?: Maybe<Encounter_Resistance>;
  /** update data of the table: "encounter_types" */
  update_encounter_types?: Maybe<Encounter_Types_Mutation_Response>;
  /** update single row of the table: "encounter_types" */
  update_encounter_types_by_pk?: Maybe<Encounter_Types>;
  /** update data of the table: "encounter_weakness" */
  update_encounter_weakness?: Maybe<Encounter_Weakness_Mutation_Response>;
  /** update single row of the table: "encounter_weakness" */
  update_encounter_weakness_by_pk?: Maybe<Encounter_Weakness>;
  /** update data of the table: "encounters" */
  update_encounters?: Maybe<Encounters_Mutation_Response>;
  /** update single row of the table: "encounters" */
  update_encounters_by_pk?: Maybe<Encounters>;
  /** update data of the table: "gauntlet_attempts" */
  update_gauntlet_attempts?: Maybe<Gauntlet_Attempts_Mutation_Response>;
  /** update single row of the table: "gauntlet_attempts" */
  update_gauntlet_attempts_by_pk?: Maybe<Gauntlet_Attempts>;
  /** update data of the table: "gauntlet_encounters" */
  update_gauntlet_encounters?: Maybe<Gauntlet_Encounters_Mutation_Response>;
  /** update single row of the table: "gauntlet_encounters" */
  update_gauntlet_encounters_by_pk?: Maybe<Gauntlet_Encounters>;
  /** update data of the table: "gauntlets" */
  update_gauntlets?: Maybe<Gauntlets_Mutation_Response>;
  /** update single row of the table: "gauntlets" */
  update_gauntlets_by_pk?: Maybe<Gauntlets>;
  /** update data of the table: "players" */
  update_players?: Maybe<Players_Mutation_Response>;
  /** update single row of the table: "players" */
  update_players_by_pk?: Maybe<Players>;
  /** update data of the table: "raid_contributions" */
  update_raid_contributions?: Maybe<Raid_Contributions_Mutation_Response>;
  /** update single row of the table: "raid_contributions" */
  update_raid_contributions_by_pk?: Maybe<Raid_Contributions>;
  /** update data of the table: "raids" */
  update_raids?: Maybe<Raids_Mutation_Response>;
  /** update single row of the table: "raids" */
  update_raids_by_pk?: Maybe<Raids>;
  /** update data of the table: "rat_types" */
  update_rat_types?: Maybe<Rat_Types_Mutation_Response>;
  /** update single row of the table: "rat_types" */
  update_rat_types_by_pk?: Maybe<Rat_Types>;
  /** update data of the table: "rattributes" */
  update_rattributes?: Maybe<Rattributes_Mutation_Response>;
  /** update single row of the table: "rattributes" */
  update_rattributes_by_pk?: Maybe<Rattributes>;
  /** update data of the table: "rewards" */
  update_rewards?: Maybe<Rewards_Mutation_Response>;
  /** update single row of the table: "rewards" */
  update_rewards_by_pk?: Maybe<Rewards>;
  /** update data of the table: "solo_encounter_results" */
  update_solo_encounter_results?: Maybe<Solo_Encounter_Results_Mutation_Response>;
  /** update single row of the table: "solo_encounter_results" */
  update_solo_encounter_results_by_pk?: Maybe<Solo_Encounter_Results>;
};


/** mutation root */
export type Mutation_RootDelete_Encounter_Rat_ConstraintsArgs = {
  where: Encounter_Rat_Constraints_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Encounter_Rat_Constraints_By_PkArgs = {
  encounter_id: Scalars['Int'];
  rat_type: Rat_Types_Enum;
};


/** mutation root */
export type Mutation_RootDelete_Encounter_ResistanceArgs = {
  where: Encounter_Resistance_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Encounter_Resistance_By_PkArgs = {
  encounter_id: Scalars['Int'];
  resistance: Rattributes_Enum;
};


/** mutation root */
export type Mutation_RootDelete_Encounter_TypesArgs = {
  where: Encounter_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Encounter_Types_By_PkArgs = {
  encounter_type: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Encounter_WeaknessArgs = {
  where: Encounter_Weakness_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Encounter_Weakness_By_PkArgs = {
  encounter_id: Scalars['Int'];
  weakness: Rattributes_Enum;
};


/** mutation root */
export type Mutation_RootDelete_EncountersArgs = {
  where: Encounters_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Encounters_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Gauntlet_AttemptsArgs = {
  where: Gauntlet_Attempts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Gauntlet_Attempts_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Gauntlet_EncountersArgs = {
  where: Gauntlet_Encounters_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Gauntlet_Encounters_By_PkArgs = {
  encounter_id: Scalars['Int'];
  gauntlet_id: Scalars['Int'];
  position: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_GauntletsArgs = {
  where: Gauntlets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Gauntlets_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_PlayersArgs = {
  where: Players_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Players_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Raid_ContributionsArgs = {
  where: Raid_Contributions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Raid_Contributions_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_RaidsArgs = {
  where: Raids_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Raids_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Rat_TypesArgs = {
  where: Rat_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rat_Types_By_PkArgs = {
  rat_type: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_RattributesArgs = {
  where: Rattributes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rattributes_By_PkArgs = {
  rattribute: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_RewardsArgs = {
  where: Rewards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rewards_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Solo_Encounter_ResultsArgs = {
  where: Solo_Encounter_Results_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Solo_Encounter_Results_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootInsert_Encounter_Rat_ConstraintsArgs = {
  objects: Array<Encounter_Rat_Constraints_Insert_Input>;
  on_conflict?: InputMaybe<Encounter_Rat_Constraints_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Encounter_Rat_Constraints_OneArgs = {
  object: Encounter_Rat_Constraints_Insert_Input;
  on_conflict?: InputMaybe<Encounter_Rat_Constraints_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Encounter_ResistanceArgs = {
  objects: Array<Encounter_Resistance_Insert_Input>;
  on_conflict?: InputMaybe<Encounter_Resistance_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Encounter_Resistance_OneArgs = {
  object: Encounter_Resistance_Insert_Input;
  on_conflict?: InputMaybe<Encounter_Resistance_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Encounter_TypesArgs = {
  objects: Array<Encounter_Types_Insert_Input>;
  on_conflict?: InputMaybe<Encounter_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Encounter_Types_OneArgs = {
  object: Encounter_Types_Insert_Input;
  on_conflict?: InputMaybe<Encounter_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Encounter_WeaknessArgs = {
  objects: Array<Encounter_Weakness_Insert_Input>;
  on_conflict?: InputMaybe<Encounter_Weakness_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Encounter_Weakness_OneArgs = {
  object: Encounter_Weakness_Insert_Input;
  on_conflict?: InputMaybe<Encounter_Weakness_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EncountersArgs = {
  objects: Array<Encounters_Insert_Input>;
  on_conflict?: InputMaybe<Encounters_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Encounters_OneArgs = {
  object: Encounters_Insert_Input;
  on_conflict?: InputMaybe<Encounters_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gauntlet_AttemptsArgs = {
  objects: Array<Gauntlet_Attempts_Insert_Input>;
  on_conflict?: InputMaybe<Gauntlet_Attempts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gauntlet_Attempts_OneArgs = {
  object: Gauntlet_Attempts_Insert_Input;
  on_conflict?: InputMaybe<Gauntlet_Attempts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gauntlet_EncountersArgs = {
  objects: Array<Gauntlet_Encounters_Insert_Input>;
  on_conflict?: InputMaybe<Gauntlet_Encounters_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gauntlet_Encounters_OneArgs = {
  object: Gauntlet_Encounters_Insert_Input;
  on_conflict?: InputMaybe<Gauntlet_Encounters_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GauntletsArgs = {
  objects: Array<Gauntlets_Insert_Input>;
  on_conflict?: InputMaybe<Gauntlets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gauntlets_OneArgs = {
  object: Gauntlets_Insert_Input;
  on_conflict?: InputMaybe<Gauntlets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PlayersArgs = {
  objects: Array<Players_Insert_Input>;
  on_conflict?: InputMaybe<Players_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Players_OneArgs = {
  object: Players_Insert_Input;
  on_conflict?: InputMaybe<Players_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Raid_ContributionsArgs = {
  objects: Array<Raid_Contributions_Insert_Input>;
  on_conflict?: InputMaybe<Raid_Contributions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Raid_Contributions_OneArgs = {
  object: Raid_Contributions_Insert_Input;
  on_conflict?: InputMaybe<Raid_Contributions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RaidsArgs = {
  objects: Array<Raids_Insert_Input>;
  on_conflict?: InputMaybe<Raids_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Raids_OneArgs = {
  object: Raids_Insert_Input;
  on_conflict?: InputMaybe<Raids_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rat_TypesArgs = {
  objects: Array<Rat_Types_Insert_Input>;
  on_conflict?: InputMaybe<Rat_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rat_Types_OneArgs = {
  object: Rat_Types_Insert_Input;
  on_conflict?: InputMaybe<Rat_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RattributesArgs = {
  objects: Array<Rattributes_Insert_Input>;
  on_conflict?: InputMaybe<Rattributes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rattributes_OneArgs = {
  object: Rattributes_Insert_Input;
  on_conflict?: InputMaybe<Rattributes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RewardsArgs = {
  objects: Array<Rewards_Insert_Input>;
  on_conflict?: InputMaybe<Rewards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rewards_OneArgs = {
  object: Rewards_Insert_Input;
  on_conflict?: InputMaybe<Rewards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Solo_Encounter_ResultsArgs = {
  objects: Array<Solo_Encounter_Results_Insert_Input>;
  on_conflict?: InputMaybe<Solo_Encounter_Results_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Solo_Encounter_Results_OneArgs = {
  object: Solo_Encounter_Results_Insert_Input;
  on_conflict?: InputMaybe<Solo_Encounter_Results_On_Conflict>;
};


/** mutation root */
export type Mutation_RootLoginArgs = {
  msg: Scalars['String'];
  wallet: Scalars['String'];
};


/** mutation root */
export type Mutation_RootUpdate_Encounter_Rat_ConstraintsArgs = {
  _inc?: InputMaybe<Encounter_Rat_Constraints_Inc_Input>;
  _set?: InputMaybe<Encounter_Rat_Constraints_Set_Input>;
  where: Encounter_Rat_Constraints_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Encounter_Rat_Constraints_By_PkArgs = {
  _inc?: InputMaybe<Encounter_Rat_Constraints_Inc_Input>;
  _set?: InputMaybe<Encounter_Rat_Constraints_Set_Input>;
  pk_columns: Encounter_Rat_Constraints_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Encounter_ResistanceArgs = {
  _inc?: InputMaybe<Encounter_Resistance_Inc_Input>;
  _set?: InputMaybe<Encounter_Resistance_Set_Input>;
  where: Encounter_Resistance_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Encounter_Resistance_By_PkArgs = {
  _inc?: InputMaybe<Encounter_Resistance_Inc_Input>;
  _set?: InputMaybe<Encounter_Resistance_Set_Input>;
  pk_columns: Encounter_Resistance_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Encounter_TypesArgs = {
  _set?: InputMaybe<Encounter_Types_Set_Input>;
  where: Encounter_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Encounter_Types_By_PkArgs = {
  _set?: InputMaybe<Encounter_Types_Set_Input>;
  pk_columns: Encounter_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Encounter_WeaknessArgs = {
  _inc?: InputMaybe<Encounter_Weakness_Inc_Input>;
  _set?: InputMaybe<Encounter_Weakness_Set_Input>;
  where: Encounter_Weakness_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Encounter_Weakness_By_PkArgs = {
  _inc?: InputMaybe<Encounter_Weakness_Inc_Input>;
  _set?: InputMaybe<Encounter_Weakness_Set_Input>;
  pk_columns: Encounter_Weakness_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_EncountersArgs = {
  _inc?: InputMaybe<Encounters_Inc_Input>;
  _set?: InputMaybe<Encounters_Set_Input>;
  where: Encounters_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Encounters_By_PkArgs = {
  _inc?: InputMaybe<Encounters_Inc_Input>;
  _set?: InputMaybe<Encounters_Set_Input>;
  pk_columns: Encounters_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Gauntlet_AttemptsArgs = {
  _inc?: InputMaybe<Gauntlet_Attempts_Inc_Input>;
  _set?: InputMaybe<Gauntlet_Attempts_Set_Input>;
  where: Gauntlet_Attempts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Gauntlet_Attempts_By_PkArgs = {
  _inc?: InputMaybe<Gauntlet_Attempts_Inc_Input>;
  _set?: InputMaybe<Gauntlet_Attempts_Set_Input>;
  pk_columns: Gauntlet_Attempts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Gauntlet_EncountersArgs = {
  _inc?: InputMaybe<Gauntlet_Encounters_Inc_Input>;
  _set?: InputMaybe<Gauntlet_Encounters_Set_Input>;
  where: Gauntlet_Encounters_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Gauntlet_Encounters_By_PkArgs = {
  _inc?: InputMaybe<Gauntlet_Encounters_Inc_Input>;
  _set?: InputMaybe<Gauntlet_Encounters_Set_Input>;
  pk_columns: Gauntlet_Encounters_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_GauntletsArgs = {
  _inc?: InputMaybe<Gauntlets_Inc_Input>;
  _set?: InputMaybe<Gauntlets_Set_Input>;
  where: Gauntlets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Gauntlets_By_PkArgs = {
  _inc?: InputMaybe<Gauntlets_Inc_Input>;
  _set?: InputMaybe<Gauntlets_Set_Input>;
  pk_columns: Gauntlets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PlayersArgs = {
  _inc?: InputMaybe<Players_Inc_Input>;
  _set?: InputMaybe<Players_Set_Input>;
  where: Players_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Players_By_PkArgs = {
  _inc?: InputMaybe<Players_Inc_Input>;
  _set?: InputMaybe<Players_Set_Input>;
  pk_columns: Players_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Raid_ContributionsArgs = {
  _inc?: InputMaybe<Raid_Contributions_Inc_Input>;
  _set?: InputMaybe<Raid_Contributions_Set_Input>;
  where: Raid_Contributions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Raid_Contributions_By_PkArgs = {
  _inc?: InputMaybe<Raid_Contributions_Inc_Input>;
  _set?: InputMaybe<Raid_Contributions_Set_Input>;
  pk_columns: Raid_Contributions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RaidsArgs = {
  _inc?: InputMaybe<Raids_Inc_Input>;
  _set?: InputMaybe<Raids_Set_Input>;
  where: Raids_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Raids_By_PkArgs = {
  _inc?: InputMaybe<Raids_Inc_Input>;
  _set?: InputMaybe<Raids_Set_Input>;
  pk_columns: Raids_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rat_TypesArgs = {
  _set?: InputMaybe<Rat_Types_Set_Input>;
  where: Rat_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rat_Types_By_PkArgs = {
  _set?: InputMaybe<Rat_Types_Set_Input>;
  pk_columns: Rat_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RattributesArgs = {
  _set?: InputMaybe<Rattributes_Set_Input>;
  where: Rattributes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rattributes_By_PkArgs = {
  _set?: InputMaybe<Rattributes_Set_Input>;
  pk_columns: Rattributes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RewardsArgs = {
  _append?: InputMaybe<Rewards_Append_Input>;
  _delete_at_path?: InputMaybe<Rewards_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Rewards_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Rewards_Delete_Key_Input>;
  _inc?: InputMaybe<Rewards_Inc_Input>;
  _prepend?: InputMaybe<Rewards_Prepend_Input>;
  _set?: InputMaybe<Rewards_Set_Input>;
  where: Rewards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rewards_By_PkArgs = {
  _append?: InputMaybe<Rewards_Append_Input>;
  _delete_at_path?: InputMaybe<Rewards_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Rewards_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Rewards_Delete_Key_Input>;
  _inc?: InputMaybe<Rewards_Inc_Input>;
  _prepend?: InputMaybe<Rewards_Prepend_Input>;
  _set?: InputMaybe<Rewards_Set_Input>;
  pk_columns: Rewards_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Solo_Encounter_ResultsArgs = {
  _inc?: InputMaybe<Solo_Encounter_Results_Inc_Input>;
  _set?: InputMaybe<Solo_Encounter_Results_Set_Input>;
  where: Solo_Encounter_Results_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Solo_Encounter_Results_By_PkArgs = {
  _inc?: InputMaybe<Solo_Encounter_Results_Inc_Input>;
  _set?: InputMaybe<Solo_Encounter_Results_Set_Input>;
  pk_columns: Solo_Encounter_Results_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "players" */
export type Players = {
  __typename?: 'players';
  created_at: Scalars['timestamptz'];
  energy: Scalars['Int'];
  /** fetch data from the table: "gauntlet_attempts" */
  gauntlet_attempts: Array<Gauntlet_Attempts>;
  /** An aggregate relationship */
  gauntlet_attempts_aggregate: Gauntlet_Attempts_Aggregate;
  id: Scalars['String'];
  level: Scalars['Int'];
  max_energy: Scalars['Int'];
  /** An array relationship */
  raid_contributions: Array<Raid_Contributions>;
  /** An aggregate relationship */
  raid_contributions_aggregate: Raid_Contributions_Aggregate;
  /** An array relationship */
  solo_encounter_results: Array<Solo_Encounter_Results>;
  /** An aggregate relationship */
  solo_encounter_results_aggregate: Solo_Encounter_Results_Aggregate;
  updated_at: Scalars['timestamptz'];
  xp: Scalars['Int'];
};


/** columns and relationships of "players" */
export type PlayersGauntlet_AttemptsArgs = {
  distinct_on?: InputMaybe<Array<Gauntlet_Attempts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gauntlet_Attempts_Order_By>>;
  where?: InputMaybe<Gauntlet_Attempts_Bool_Exp>;
};


/** columns and relationships of "players" */
export type PlayersGauntlet_Attempts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gauntlet_Attempts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gauntlet_Attempts_Order_By>>;
  where?: InputMaybe<Gauntlet_Attempts_Bool_Exp>;
};


/** columns and relationships of "players" */
export type PlayersRaid_ContributionsArgs = {
  distinct_on?: InputMaybe<Array<Raid_Contributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Raid_Contributions_Order_By>>;
  where?: InputMaybe<Raid_Contributions_Bool_Exp>;
};


/** columns and relationships of "players" */
export type PlayersRaid_Contributions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Raid_Contributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Raid_Contributions_Order_By>>;
  where?: InputMaybe<Raid_Contributions_Bool_Exp>;
};


/** columns and relationships of "players" */
export type PlayersSolo_Encounter_ResultsArgs = {
  distinct_on?: InputMaybe<Array<Solo_Encounter_Results_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Solo_Encounter_Results_Order_By>>;
  where?: InputMaybe<Solo_Encounter_Results_Bool_Exp>;
};


/** columns and relationships of "players" */
export type PlayersSolo_Encounter_Results_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Solo_Encounter_Results_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Solo_Encounter_Results_Order_By>>;
  where?: InputMaybe<Solo_Encounter_Results_Bool_Exp>;
};

/** aggregated selection of "players" */
export type Players_Aggregate = {
  __typename?: 'players_aggregate';
  aggregate?: Maybe<Players_Aggregate_Fields>;
  nodes: Array<Players>;
};

/** aggregate fields of "players" */
export type Players_Aggregate_Fields = {
  __typename?: 'players_aggregate_fields';
  avg?: Maybe<Players_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Players_Max_Fields>;
  min?: Maybe<Players_Min_Fields>;
  stddev?: Maybe<Players_Stddev_Fields>;
  stddev_pop?: Maybe<Players_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Players_Stddev_Samp_Fields>;
  sum?: Maybe<Players_Sum_Fields>;
  var_pop?: Maybe<Players_Var_Pop_Fields>;
  var_samp?: Maybe<Players_Var_Samp_Fields>;
  variance?: Maybe<Players_Variance_Fields>;
};


/** aggregate fields of "players" */
export type Players_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Players_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Players_Avg_Fields = {
  __typename?: 'players_avg_fields';
  energy?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  max_energy?: Maybe<Scalars['Float']>;
  xp?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "players". All fields are combined with a logical 'AND'. */
export type Players_Bool_Exp = {
  _and?: InputMaybe<Array<Players_Bool_Exp>>;
  _not?: InputMaybe<Players_Bool_Exp>;
  _or?: InputMaybe<Array<Players_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  energy?: InputMaybe<Int_Comparison_Exp>;
  gauntlet_attempts?: InputMaybe<Gauntlet_Attempts_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  level?: InputMaybe<Int_Comparison_Exp>;
  max_energy?: InputMaybe<Int_Comparison_Exp>;
  raid_contributions?: InputMaybe<Raid_Contributions_Bool_Exp>;
  solo_encounter_results?: InputMaybe<Solo_Encounter_Results_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  xp?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "players" */
export enum Players_Constraint {
  /** unique or primary key constraint */
  PlayersPkey = 'players_pkey'
}

/** input type for incrementing numeric columns in table "players" */
export type Players_Inc_Input = {
  energy?: InputMaybe<Scalars['Int']>;
  level?: InputMaybe<Scalars['Int']>;
  max_energy?: InputMaybe<Scalars['Int']>;
  xp?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "players" */
export type Players_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  energy?: InputMaybe<Scalars['Int']>;
  gauntlet_attempts?: InputMaybe<Gauntlet_Attempts_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['Int']>;
  max_energy?: InputMaybe<Scalars['Int']>;
  raid_contributions?: InputMaybe<Raid_Contributions_Arr_Rel_Insert_Input>;
  solo_encounter_results?: InputMaybe<Solo_Encounter_Results_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  xp?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Players_Max_Fields = {
  __typename?: 'players_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  energy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Int']>;
  max_energy?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  xp?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Players_Min_Fields = {
  __typename?: 'players_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  energy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Int']>;
  max_energy?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  xp?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "players" */
export type Players_Mutation_Response = {
  __typename?: 'players_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Players>;
};

/** input type for inserting object relation for remote table "players" */
export type Players_Obj_Rel_Insert_Input = {
  data: Players_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Players_On_Conflict>;
};

/** on conflict condition type for table "players" */
export type Players_On_Conflict = {
  constraint: Players_Constraint;
  update_columns?: Array<Players_Update_Column>;
  where?: InputMaybe<Players_Bool_Exp>;
};

/** Ordering options when selecting data from "players". */
export type Players_Order_By = {
  created_at?: InputMaybe<Order_By>;
  energy?: InputMaybe<Order_By>;
  gauntlet_attempts_aggregate?: InputMaybe<Gauntlet_Attempts_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  max_energy?: InputMaybe<Order_By>;
  raid_contributions_aggregate?: InputMaybe<Raid_Contributions_Aggregate_Order_By>;
  solo_encounter_results_aggregate?: InputMaybe<Solo_Encounter_Results_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  xp?: InputMaybe<Order_By>;
};

/** primary key columns input for table: players */
export type Players_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "players" */
export enum Players_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Energy = 'energy',
  /** column name */
  Id = 'id',
  /** column name */
  Level = 'level',
  /** column name */
  MaxEnergy = 'max_energy',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Xp = 'xp'
}

/** input type for updating data in table "players" */
export type Players_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  energy?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['Int']>;
  max_energy?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  xp?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Players_Stddev_Fields = {
  __typename?: 'players_stddev_fields';
  energy?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  max_energy?: Maybe<Scalars['Float']>;
  xp?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Players_Stddev_Pop_Fields = {
  __typename?: 'players_stddev_pop_fields';
  energy?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  max_energy?: Maybe<Scalars['Float']>;
  xp?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Players_Stddev_Samp_Fields = {
  __typename?: 'players_stddev_samp_fields';
  energy?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  max_energy?: Maybe<Scalars['Float']>;
  xp?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Players_Sum_Fields = {
  __typename?: 'players_sum_fields';
  energy?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  max_energy?: Maybe<Scalars['Int']>;
  xp?: Maybe<Scalars['Int']>;
};

/** update columns of table "players" */
export enum Players_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Energy = 'energy',
  /** column name */
  Id = 'id',
  /** column name */
  Level = 'level',
  /** column name */
  MaxEnergy = 'max_energy',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Xp = 'xp'
}

/** aggregate var_pop on columns */
export type Players_Var_Pop_Fields = {
  __typename?: 'players_var_pop_fields';
  energy?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  max_energy?: Maybe<Scalars['Float']>;
  xp?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Players_Var_Samp_Fields = {
  __typename?: 'players_var_samp_fields';
  energy?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  max_energy?: Maybe<Scalars['Float']>;
  xp?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Players_Variance_Fields = {
  __typename?: 'players_variance_fields';
  energy?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  max_energy?: Maybe<Scalars['Float']>;
  xp?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  encounter_rat_constraints: Array<Encounter_Rat_Constraints>;
  /** An aggregate relationship */
  encounter_rat_constraints_aggregate: Encounter_Rat_Constraints_Aggregate;
  /** fetch data from the table: "encounter_rat_constraints" using primary key columns */
  encounter_rat_constraints_by_pk?: Maybe<Encounter_Rat_Constraints>;
  /** fetch data from the table: "encounter_resistance" */
  encounter_resistance: Array<Encounter_Resistance>;
  /** fetch aggregated fields from the table: "encounter_resistance" */
  encounter_resistance_aggregate: Encounter_Resistance_Aggregate;
  /** fetch data from the table: "encounter_resistance" using primary key columns */
  encounter_resistance_by_pk?: Maybe<Encounter_Resistance>;
  /** fetch data from the table: "encounter_types" */
  encounter_types: Array<Encounter_Types>;
  /** fetch aggregated fields from the table: "encounter_types" */
  encounter_types_aggregate: Encounter_Types_Aggregate;
  /** fetch data from the table: "encounter_types" using primary key columns */
  encounter_types_by_pk?: Maybe<Encounter_Types>;
  /** fetch data from the table: "encounter_weakness" */
  encounter_weakness: Array<Encounter_Weakness>;
  /** fetch aggregated fields from the table: "encounter_weakness" */
  encounter_weakness_aggregate: Encounter_Weakness_Aggregate;
  /** fetch data from the table: "encounter_weakness" using primary key columns */
  encounter_weakness_by_pk?: Maybe<Encounter_Weakness>;
  /** An array relationship */
  encounters: Array<Encounters>;
  /** An aggregate relationship */
  encounters_aggregate: Encounters_Aggregate;
  /** fetch data from the table: "encounters" using primary key columns */
  encounters_by_pk?: Maybe<Encounters>;
  /** fetch data from the table: "gauntlet_attempts" */
  gauntlet_attempts: Array<Gauntlet_Attempts>;
  /** An aggregate relationship */
  gauntlet_attempts_aggregate: Gauntlet_Attempts_Aggregate;
  /** fetch data from the table: "gauntlet_attempts" using primary key columns */
  gauntlet_attempts_by_pk?: Maybe<Gauntlet_Attempts>;
  /** An array relationship */
  gauntlet_encounters: Array<Gauntlet_Encounters>;
  /** An aggregate relationship */
  gauntlet_encounters_aggregate: Gauntlet_Encounters_Aggregate;
  /** fetch data from the table: "gauntlet_encounters" using primary key columns */
  gauntlet_encounters_by_pk?: Maybe<Gauntlet_Encounters>;
  /** An array relationship */
  gauntlets: Array<Gauntlets>;
  /** An aggregate relationship */
  gauntlets_aggregate: Gauntlets_Aggregate;
  /** fetch data from the table: "gauntlets" using primary key columns */
  gauntlets_by_pk?: Maybe<Gauntlets>;
  /** fetch data from the table: "players" */
  players: Array<Players>;
  /** fetch aggregated fields from the table: "players" */
  players_aggregate: Players_Aggregate;
  /** fetch data from the table: "players" using primary key columns */
  players_by_pk?: Maybe<Players>;
  /** An array relationship */
  raid_contributions: Array<Raid_Contributions>;
  /** An aggregate relationship */
  raid_contributions_aggregate: Raid_Contributions_Aggregate;
  /** fetch data from the table: "raid_contributions" using primary key columns */
  raid_contributions_by_pk?: Maybe<Raid_Contributions>;
  /** An array relationship */
  raids: Array<Raids>;
  /** An aggregate relationship */
  raids_aggregate: Raids_Aggregate;
  /** fetch data from the table: "raids" using primary key columns */
  raids_by_pk?: Maybe<Raids>;
  /** fetch data from the table: "rat_types" */
  rat_types: Array<Rat_Types>;
  /** fetch aggregated fields from the table: "rat_types" */
  rat_types_aggregate: Rat_Types_Aggregate;
  /** fetch data from the table: "rat_types" using primary key columns */
  rat_types_by_pk?: Maybe<Rat_Types>;
  /** fetch data from the table: "rattributes" */
  rattributes: Array<Rattributes>;
  /** fetch aggregated fields from the table: "rattributes" */
  rattributes_aggregate: Rattributes_Aggregate;
  /** fetch data from the table: "rattributes" using primary key columns */
  rattributes_by_pk?: Maybe<Rattributes>;
  /** fetch data from the table: "rewards" */
  rewards: Array<Rewards>;
  /** fetch aggregated fields from the table: "rewards" */
  rewards_aggregate: Rewards_Aggregate;
  /** fetch data from the table: "rewards" using primary key columns */
  rewards_by_pk?: Maybe<Rewards>;
  /** An array relationship */
  solo_encounter_results: Array<Solo_Encounter_Results>;
  /** An aggregate relationship */
  solo_encounter_results_aggregate: Solo_Encounter_Results_Aggregate;
  /** fetch data from the table: "solo_encounter_results" using primary key columns */
  solo_encounter_results_by_pk?: Maybe<Solo_Encounter_Results>;
};


export type Query_RootEncounter_Rat_ConstraintsArgs = {
  distinct_on?: InputMaybe<Array<Encounter_Rat_Constraints_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Encounter_Rat_Constraints_Order_By>>;
  where?: InputMaybe<Encounter_Rat_Constraints_Bool_Exp>;
};


export type Query_RootEncounter_Rat_Constraints_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Encounter_Rat_Constraints_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Encounter_Rat_Constraints_Order_By>>;
  where?: InputMaybe<Encounter_Rat_Constraints_Bool_Exp>;
};


export type Query_RootEncounter_Rat_Constraints_By_PkArgs = {
  encounter_id: Scalars['Int'];
  rat_type: Rat_Types_Enum;
};


export type Query_RootEncounter_ResistanceArgs = {
  distinct_on?: InputMaybe<Array<Encounter_Resistance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Encounter_Resistance_Order_By>>;
  where?: InputMaybe<Encounter_Resistance_Bool_Exp>;
};


export type Query_RootEncounter_Resistance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Encounter_Resistance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Encounter_Resistance_Order_By>>;
  where?: InputMaybe<Encounter_Resistance_Bool_Exp>;
};


export type Query_RootEncounter_Resistance_By_PkArgs = {
  encounter_id: Scalars['Int'];
  resistance: Rattributes_Enum;
};


export type Query_RootEncounter_TypesArgs = {
  distinct_on?: InputMaybe<Array<Encounter_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Encounter_Types_Order_By>>;
  where?: InputMaybe<Encounter_Types_Bool_Exp>;
};


export type Query_RootEncounter_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Encounter_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Encounter_Types_Order_By>>;
  where?: InputMaybe<Encounter_Types_Bool_Exp>;
};


export type Query_RootEncounter_Types_By_PkArgs = {
  encounter_type: Scalars['String'];
};


export type Query_RootEncounter_WeaknessArgs = {
  distinct_on?: InputMaybe<Array<Encounter_Weakness_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Encounter_Weakness_Order_By>>;
  where?: InputMaybe<Encounter_Weakness_Bool_Exp>;
};


export type Query_RootEncounter_Weakness_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Encounter_Weakness_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Encounter_Weakness_Order_By>>;
  where?: InputMaybe<Encounter_Weakness_Bool_Exp>;
};


export type Query_RootEncounter_Weakness_By_PkArgs = {
  encounter_id: Scalars['Int'];
  weakness: Rattributes_Enum;
};


export type Query_RootEncountersArgs = {
  distinct_on?: InputMaybe<Array<Encounters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Encounters_Order_By>>;
  where?: InputMaybe<Encounters_Bool_Exp>;
};


export type Query_RootEncounters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Encounters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Encounters_Order_By>>;
  where?: InputMaybe<Encounters_Bool_Exp>;
};


export type Query_RootEncounters_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootGauntlet_AttemptsArgs = {
  distinct_on?: InputMaybe<Array<Gauntlet_Attempts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gauntlet_Attempts_Order_By>>;
  where?: InputMaybe<Gauntlet_Attempts_Bool_Exp>;
};


export type Query_RootGauntlet_Attempts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gauntlet_Attempts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gauntlet_Attempts_Order_By>>;
  where?: InputMaybe<Gauntlet_Attempts_Bool_Exp>;
};


export type Query_RootGauntlet_Attempts_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootGauntlet_EncountersArgs = {
  distinct_on?: InputMaybe<Array<Gauntlet_Encounters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gauntlet_Encounters_Order_By>>;
  where?: InputMaybe<Gauntlet_Encounters_Bool_Exp>;
};


export type Query_RootGauntlet_Encounters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gauntlet_Encounters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gauntlet_Encounters_Order_By>>;
  where?: InputMaybe<Gauntlet_Encounters_Bool_Exp>;
};


export type Query_RootGauntlet_Encounters_By_PkArgs = {
  encounter_id: Scalars['Int'];
  gauntlet_id: Scalars['Int'];
  position: Scalars['Int'];
};


export type Query_RootGauntletsArgs = {
  distinct_on?: InputMaybe<Array<Gauntlets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gauntlets_Order_By>>;
  where?: InputMaybe<Gauntlets_Bool_Exp>;
};


export type Query_RootGauntlets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gauntlets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gauntlets_Order_By>>;
  where?: InputMaybe<Gauntlets_Bool_Exp>;
};


export type Query_RootGauntlets_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPlayersArgs = {
  distinct_on?: InputMaybe<Array<Players_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Players_Order_By>>;
  where?: InputMaybe<Players_Bool_Exp>;
};


export type Query_RootPlayers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Players_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Players_Order_By>>;
  where?: InputMaybe<Players_Bool_Exp>;
};


export type Query_RootPlayers_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootRaid_ContributionsArgs = {
  distinct_on?: InputMaybe<Array<Raid_Contributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Raid_Contributions_Order_By>>;
  where?: InputMaybe<Raid_Contributions_Bool_Exp>;
};


export type Query_RootRaid_Contributions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Raid_Contributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Raid_Contributions_Order_By>>;
  where?: InputMaybe<Raid_Contributions_Bool_Exp>;
};


export type Query_RootRaid_Contributions_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootRaidsArgs = {
  distinct_on?: InputMaybe<Array<Raids_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Raids_Order_By>>;
  where?: InputMaybe<Raids_Bool_Exp>;
};


export type Query_RootRaids_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Raids_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Raids_Order_By>>;
  where?: InputMaybe<Raids_Bool_Exp>;
};


export type Query_RootRaids_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootRat_TypesArgs = {
  distinct_on?: InputMaybe<Array<Rat_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rat_Types_Order_By>>;
  where?: InputMaybe<Rat_Types_Bool_Exp>;
};


export type Query_RootRat_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rat_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rat_Types_Order_By>>;
  where?: InputMaybe<Rat_Types_Bool_Exp>;
};


export type Query_RootRat_Types_By_PkArgs = {
  rat_type: Scalars['String'];
};


export type Query_RootRattributesArgs = {
  distinct_on?: InputMaybe<Array<Rattributes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rattributes_Order_By>>;
  where?: InputMaybe<Rattributes_Bool_Exp>;
};


export type Query_RootRattributes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rattributes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rattributes_Order_By>>;
  where?: InputMaybe<Rattributes_Bool_Exp>;
};


export type Query_RootRattributes_By_PkArgs = {
  rattribute: Scalars['String'];
};


export type Query_RootRewardsArgs = {
  distinct_on?: InputMaybe<Array<Rewards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rewards_Order_By>>;
  where?: InputMaybe<Rewards_Bool_Exp>;
};


export type Query_RootRewards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rewards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rewards_Order_By>>;
  where?: InputMaybe<Rewards_Bool_Exp>;
};


export type Query_RootRewards_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSolo_Encounter_ResultsArgs = {
  distinct_on?: InputMaybe<Array<Solo_Encounter_Results_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Solo_Encounter_Results_Order_By>>;
  where?: InputMaybe<Solo_Encounter_Results_Bool_Exp>;
};


export type Query_RootSolo_Encounter_Results_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Solo_Encounter_Results_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Solo_Encounter_Results_Order_By>>;
  where?: InputMaybe<Solo_Encounter_Results_Bool_Exp>;
};


export type Query_RootSolo_Encounter_Results_By_PkArgs = {
  id: Scalars['bigint'];
};

/** columns and relationships of "raid_contributions" */
export type Raid_Contributions = {
  __typename?: 'raid_contributions';
  contribution: Scalars['Int'];
  contribution_timestamp: Scalars['timestamptz'];
  faction?: Maybe<Rat_Types_Enum>;
  id: Scalars['bigint'];
  /** An object relationship */
  player: Players;
  player_id: Scalars['String'];
  /** An object relationship */
  raid: Raids;
  raid_id: Scalars['Int'];
  /** An object relationship */
  rat_type?: Maybe<Rat_Types>;
};

/** aggregated selection of "raid_contributions" */
export type Raid_Contributions_Aggregate = {
  __typename?: 'raid_contributions_aggregate';
  aggregate?: Maybe<Raid_Contributions_Aggregate_Fields>;
  nodes: Array<Raid_Contributions>;
};

/** aggregate fields of "raid_contributions" */
export type Raid_Contributions_Aggregate_Fields = {
  __typename?: 'raid_contributions_aggregate_fields';
  avg?: Maybe<Raid_Contributions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Raid_Contributions_Max_Fields>;
  min?: Maybe<Raid_Contributions_Min_Fields>;
  stddev?: Maybe<Raid_Contributions_Stddev_Fields>;
  stddev_pop?: Maybe<Raid_Contributions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Raid_Contributions_Stddev_Samp_Fields>;
  sum?: Maybe<Raid_Contributions_Sum_Fields>;
  var_pop?: Maybe<Raid_Contributions_Var_Pop_Fields>;
  var_samp?: Maybe<Raid_Contributions_Var_Samp_Fields>;
  variance?: Maybe<Raid_Contributions_Variance_Fields>;
};


/** aggregate fields of "raid_contributions" */
export type Raid_Contributions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Raid_Contributions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "raid_contributions" */
export type Raid_Contributions_Aggregate_Order_By = {
  avg?: InputMaybe<Raid_Contributions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Raid_Contributions_Max_Order_By>;
  min?: InputMaybe<Raid_Contributions_Min_Order_By>;
  stddev?: InputMaybe<Raid_Contributions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Raid_Contributions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Raid_Contributions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Raid_Contributions_Sum_Order_By>;
  var_pop?: InputMaybe<Raid_Contributions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Raid_Contributions_Var_Samp_Order_By>;
  variance?: InputMaybe<Raid_Contributions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "raid_contributions" */
export type Raid_Contributions_Arr_Rel_Insert_Input = {
  data: Array<Raid_Contributions_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Raid_Contributions_On_Conflict>;
};

/** aggregate avg on columns */
export type Raid_Contributions_Avg_Fields = {
  __typename?: 'raid_contributions_avg_fields';
  contribution?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  raid_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "raid_contributions" */
export type Raid_Contributions_Avg_Order_By = {
  contribution?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  raid_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "raid_contributions". All fields are combined with a logical 'AND'. */
export type Raid_Contributions_Bool_Exp = {
  _and?: InputMaybe<Array<Raid_Contributions_Bool_Exp>>;
  _not?: InputMaybe<Raid_Contributions_Bool_Exp>;
  _or?: InputMaybe<Array<Raid_Contributions_Bool_Exp>>;
  contribution?: InputMaybe<Int_Comparison_Exp>;
  contribution_timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  faction?: InputMaybe<Rat_Types_Enum_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  player?: InputMaybe<Players_Bool_Exp>;
  player_id?: InputMaybe<String_Comparison_Exp>;
  raid?: InputMaybe<Raids_Bool_Exp>;
  raid_id?: InputMaybe<Int_Comparison_Exp>;
  rat_type?: InputMaybe<Rat_Types_Bool_Exp>;
};

/** unique or primary key constraints on table "raid_contributions" */
export enum Raid_Contributions_Constraint {
  /** unique or primary key constraint */
  RaidContributionsPkey = 'raid_contributions_pkey'
}

/** input type for incrementing numeric columns in table "raid_contributions" */
export type Raid_Contributions_Inc_Input = {
  contribution?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  raid_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "raid_contributions" */
export type Raid_Contributions_Insert_Input = {
  contribution?: InputMaybe<Scalars['Int']>;
  contribution_timestamp?: InputMaybe<Scalars['timestamptz']>;
  faction?: InputMaybe<Rat_Types_Enum>;
  id?: InputMaybe<Scalars['bigint']>;
  player?: InputMaybe<Players_Obj_Rel_Insert_Input>;
  player_id?: InputMaybe<Scalars['String']>;
  raid?: InputMaybe<Raids_Obj_Rel_Insert_Input>;
  raid_id?: InputMaybe<Scalars['Int']>;
  rat_type?: InputMaybe<Rat_Types_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Raid_Contributions_Max_Fields = {
  __typename?: 'raid_contributions_max_fields';
  contribution?: Maybe<Scalars['Int']>;
  contribution_timestamp?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  player_id?: Maybe<Scalars['String']>;
  raid_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "raid_contributions" */
export type Raid_Contributions_Max_Order_By = {
  contribution?: InputMaybe<Order_By>;
  contribution_timestamp?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  raid_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Raid_Contributions_Min_Fields = {
  __typename?: 'raid_contributions_min_fields';
  contribution?: Maybe<Scalars['Int']>;
  contribution_timestamp?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  player_id?: Maybe<Scalars['String']>;
  raid_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "raid_contributions" */
export type Raid_Contributions_Min_Order_By = {
  contribution?: InputMaybe<Order_By>;
  contribution_timestamp?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  raid_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "raid_contributions" */
export type Raid_Contributions_Mutation_Response = {
  __typename?: 'raid_contributions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Raid_Contributions>;
};

/** on conflict condition type for table "raid_contributions" */
export type Raid_Contributions_On_Conflict = {
  constraint: Raid_Contributions_Constraint;
  update_columns?: Array<Raid_Contributions_Update_Column>;
  where?: InputMaybe<Raid_Contributions_Bool_Exp>;
};

/** Ordering options when selecting data from "raid_contributions". */
export type Raid_Contributions_Order_By = {
  contribution?: InputMaybe<Order_By>;
  contribution_timestamp?: InputMaybe<Order_By>;
  faction?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  player?: InputMaybe<Players_Order_By>;
  player_id?: InputMaybe<Order_By>;
  raid?: InputMaybe<Raids_Order_By>;
  raid_id?: InputMaybe<Order_By>;
  rat_type?: InputMaybe<Rat_Types_Order_By>;
};

/** primary key columns input for table: raid_contributions */
export type Raid_Contributions_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "raid_contributions" */
export enum Raid_Contributions_Select_Column {
  /** column name */
  Contribution = 'contribution',
  /** column name */
  ContributionTimestamp = 'contribution_timestamp',
  /** column name */
  Faction = 'faction',
  /** column name */
  Id = 'id',
  /** column name */
  PlayerId = 'player_id',
  /** column name */
  RaidId = 'raid_id'
}

/** input type for updating data in table "raid_contributions" */
export type Raid_Contributions_Set_Input = {
  contribution?: InputMaybe<Scalars['Int']>;
  contribution_timestamp?: InputMaybe<Scalars['timestamptz']>;
  faction?: InputMaybe<Rat_Types_Enum>;
  id?: InputMaybe<Scalars['bigint']>;
  player_id?: InputMaybe<Scalars['String']>;
  raid_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Raid_Contributions_Stddev_Fields = {
  __typename?: 'raid_contributions_stddev_fields';
  contribution?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  raid_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "raid_contributions" */
export type Raid_Contributions_Stddev_Order_By = {
  contribution?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  raid_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Raid_Contributions_Stddev_Pop_Fields = {
  __typename?: 'raid_contributions_stddev_pop_fields';
  contribution?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  raid_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "raid_contributions" */
export type Raid_Contributions_Stddev_Pop_Order_By = {
  contribution?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  raid_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Raid_Contributions_Stddev_Samp_Fields = {
  __typename?: 'raid_contributions_stddev_samp_fields';
  contribution?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  raid_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "raid_contributions" */
export type Raid_Contributions_Stddev_Samp_Order_By = {
  contribution?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  raid_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Raid_Contributions_Sum_Fields = {
  __typename?: 'raid_contributions_sum_fields';
  contribution?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  raid_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "raid_contributions" */
export type Raid_Contributions_Sum_Order_By = {
  contribution?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  raid_id?: InputMaybe<Order_By>;
};

/** update columns of table "raid_contributions" */
export enum Raid_Contributions_Update_Column {
  /** column name */
  Contribution = 'contribution',
  /** column name */
  ContributionTimestamp = 'contribution_timestamp',
  /** column name */
  Faction = 'faction',
  /** column name */
  Id = 'id',
  /** column name */
  PlayerId = 'player_id',
  /** column name */
  RaidId = 'raid_id'
}

/** aggregate var_pop on columns */
export type Raid_Contributions_Var_Pop_Fields = {
  __typename?: 'raid_contributions_var_pop_fields';
  contribution?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  raid_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "raid_contributions" */
export type Raid_Contributions_Var_Pop_Order_By = {
  contribution?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  raid_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Raid_Contributions_Var_Samp_Fields = {
  __typename?: 'raid_contributions_var_samp_fields';
  contribution?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  raid_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "raid_contributions" */
export type Raid_Contributions_Var_Samp_Order_By = {
  contribution?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  raid_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Raid_Contributions_Variance_Fields = {
  __typename?: 'raid_contributions_variance_fields';
  contribution?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  raid_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "raid_contributions" */
export type Raid_Contributions_Variance_Order_By = {
  contribution?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  raid_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "raids" */
export type Raids = {
  __typename?: 'raids';
  active: Scalars['Boolean'];
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  encounter: Encounters;
  encounter_id: Scalars['Int'];
  end_timestamp: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An array relationship */
  raid_contributions: Array<Raid_Contributions>;
  /** An aggregate relationship */
  raid_contributions_aggregate: Raid_Contributions_Aggregate;
  result?: Maybe<Scalars['Boolean']>;
  /** An object relationship */
  reward: Rewards;
  reward_id: Scalars['Int'];
  start_timestamp: Scalars['timestamptz'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "raids" */
export type RaidsRaid_ContributionsArgs = {
  distinct_on?: InputMaybe<Array<Raid_Contributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Raid_Contributions_Order_By>>;
  where?: InputMaybe<Raid_Contributions_Bool_Exp>;
};


/** columns and relationships of "raids" */
export type RaidsRaid_Contributions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Raid_Contributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Raid_Contributions_Order_By>>;
  where?: InputMaybe<Raid_Contributions_Bool_Exp>;
};

/** aggregated selection of "raids" */
export type Raids_Aggregate = {
  __typename?: 'raids_aggregate';
  aggregate?: Maybe<Raids_Aggregate_Fields>;
  nodes: Array<Raids>;
};

/** aggregate fields of "raids" */
export type Raids_Aggregate_Fields = {
  __typename?: 'raids_aggregate_fields';
  avg?: Maybe<Raids_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Raids_Max_Fields>;
  min?: Maybe<Raids_Min_Fields>;
  stddev?: Maybe<Raids_Stddev_Fields>;
  stddev_pop?: Maybe<Raids_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Raids_Stddev_Samp_Fields>;
  sum?: Maybe<Raids_Sum_Fields>;
  var_pop?: Maybe<Raids_Var_Pop_Fields>;
  var_samp?: Maybe<Raids_Var_Samp_Fields>;
  variance?: Maybe<Raids_Variance_Fields>;
};


/** aggregate fields of "raids" */
export type Raids_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Raids_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "raids" */
export type Raids_Aggregate_Order_By = {
  avg?: InputMaybe<Raids_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Raids_Max_Order_By>;
  min?: InputMaybe<Raids_Min_Order_By>;
  stddev?: InputMaybe<Raids_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Raids_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Raids_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Raids_Sum_Order_By>;
  var_pop?: InputMaybe<Raids_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Raids_Var_Samp_Order_By>;
  variance?: InputMaybe<Raids_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "raids" */
export type Raids_Arr_Rel_Insert_Input = {
  data: Array<Raids_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Raids_On_Conflict>;
};

/** aggregate avg on columns */
export type Raids_Avg_Fields = {
  __typename?: 'raids_avg_fields';
  encounter_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  reward_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "raids" */
export type Raids_Avg_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reward_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "raids". All fields are combined with a logical 'AND'. */
export type Raids_Bool_Exp = {
  _and?: InputMaybe<Array<Raids_Bool_Exp>>;
  _not?: InputMaybe<Raids_Bool_Exp>;
  _or?: InputMaybe<Array<Raids_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  encounter?: InputMaybe<Encounters_Bool_Exp>;
  encounter_id?: InputMaybe<Int_Comparison_Exp>;
  end_timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  raid_contributions?: InputMaybe<Raid_Contributions_Bool_Exp>;
  result?: InputMaybe<Boolean_Comparison_Exp>;
  reward?: InputMaybe<Rewards_Bool_Exp>;
  reward_id?: InputMaybe<Int_Comparison_Exp>;
  start_timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "raids" */
export enum Raids_Constraint {
  /** unique or primary key constraint */
  RaidsPkey = 'raids_pkey'
}

/** input type for incrementing numeric columns in table "raids" */
export type Raids_Inc_Input = {
  encounter_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  reward_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "raids" */
export type Raids_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  encounter?: InputMaybe<Encounters_Obj_Rel_Insert_Input>;
  encounter_id?: InputMaybe<Scalars['Int']>;
  end_timestamp?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  raid_contributions?: InputMaybe<Raid_Contributions_Arr_Rel_Insert_Input>;
  result?: InputMaybe<Scalars['Boolean']>;
  reward?: InputMaybe<Rewards_Obj_Rel_Insert_Input>;
  reward_id?: InputMaybe<Scalars['Int']>;
  start_timestamp?: InputMaybe<Scalars['timestamptz']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Raids_Max_Fields = {
  __typename?: 'raids_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  encounter_id?: Maybe<Scalars['Int']>;
  end_timestamp?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  reward_id?: Maybe<Scalars['Int']>;
  start_timestamp?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "raids" */
export type Raids_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  encounter_id?: InputMaybe<Order_By>;
  end_timestamp?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reward_id?: InputMaybe<Order_By>;
  start_timestamp?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Raids_Min_Fields = {
  __typename?: 'raids_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  encounter_id?: Maybe<Scalars['Int']>;
  end_timestamp?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  reward_id?: Maybe<Scalars['Int']>;
  start_timestamp?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "raids" */
export type Raids_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  encounter_id?: InputMaybe<Order_By>;
  end_timestamp?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reward_id?: InputMaybe<Order_By>;
  start_timestamp?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "raids" */
export type Raids_Mutation_Response = {
  __typename?: 'raids_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Raids>;
};

/** input type for inserting object relation for remote table "raids" */
export type Raids_Obj_Rel_Insert_Input = {
  data: Raids_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Raids_On_Conflict>;
};

/** on conflict condition type for table "raids" */
export type Raids_On_Conflict = {
  constraint: Raids_Constraint;
  update_columns?: Array<Raids_Update_Column>;
  where?: InputMaybe<Raids_Bool_Exp>;
};

/** Ordering options when selecting data from "raids". */
export type Raids_Order_By = {
  active?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  encounter?: InputMaybe<Encounters_Order_By>;
  encounter_id?: InputMaybe<Order_By>;
  end_timestamp?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  raid_contributions_aggregate?: InputMaybe<Raid_Contributions_Aggregate_Order_By>;
  result?: InputMaybe<Order_By>;
  reward?: InputMaybe<Rewards_Order_By>;
  reward_id?: InputMaybe<Order_By>;
  start_timestamp?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: raids */
export type Raids_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "raids" */
export enum Raids_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EncounterId = 'encounter_id',
  /** column name */
  EndTimestamp = 'end_timestamp',
  /** column name */
  Id = 'id',
  /** column name */
  Result = 'result',
  /** column name */
  RewardId = 'reward_id',
  /** column name */
  StartTimestamp = 'start_timestamp',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "raids" */
export type Raids_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  encounter_id?: InputMaybe<Scalars['Int']>;
  end_timestamp?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  result?: InputMaybe<Scalars['Boolean']>;
  reward_id?: InputMaybe<Scalars['Int']>;
  start_timestamp?: InputMaybe<Scalars['timestamptz']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Raids_Stddev_Fields = {
  __typename?: 'raids_stddev_fields';
  encounter_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  reward_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "raids" */
export type Raids_Stddev_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reward_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Raids_Stddev_Pop_Fields = {
  __typename?: 'raids_stddev_pop_fields';
  encounter_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  reward_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "raids" */
export type Raids_Stddev_Pop_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reward_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Raids_Stddev_Samp_Fields = {
  __typename?: 'raids_stddev_samp_fields';
  encounter_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  reward_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "raids" */
export type Raids_Stddev_Samp_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reward_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Raids_Sum_Fields = {
  __typename?: 'raids_sum_fields';
  encounter_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  reward_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "raids" */
export type Raids_Sum_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reward_id?: InputMaybe<Order_By>;
};

/** update columns of table "raids" */
export enum Raids_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EncounterId = 'encounter_id',
  /** column name */
  EndTimestamp = 'end_timestamp',
  /** column name */
  Id = 'id',
  /** column name */
  Result = 'result',
  /** column name */
  RewardId = 'reward_id',
  /** column name */
  StartTimestamp = 'start_timestamp',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Raids_Var_Pop_Fields = {
  __typename?: 'raids_var_pop_fields';
  encounter_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  reward_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "raids" */
export type Raids_Var_Pop_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reward_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Raids_Var_Samp_Fields = {
  __typename?: 'raids_var_samp_fields';
  encounter_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  reward_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "raids" */
export type Raids_Var_Samp_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reward_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Raids_Variance_Fields = {
  __typename?: 'raids_variance_fields';
  encounter_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  reward_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "raids" */
export type Raids_Variance_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reward_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "rat_types" */
export type Rat_Types = {
  __typename?: 'rat_types';
  /** An array relationship */
  encounter_rat_constraints: Array<Encounter_Rat_Constraints>;
  /** An aggregate relationship */
  encounter_rat_constraints_aggregate: Encounter_Rat_Constraints_Aggregate;
  /** An array relationship */
  raid_contributions: Array<Raid_Contributions>;
  /** An aggregate relationship */
  raid_contributions_aggregate: Raid_Contributions_Aggregate;
  rat_type: Scalars['String'];
};


/** columns and relationships of "rat_types" */
export type Rat_TypesEncounter_Rat_ConstraintsArgs = {
  distinct_on?: InputMaybe<Array<Encounter_Rat_Constraints_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Encounter_Rat_Constraints_Order_By>>;
  where?: InputMaybe<Encounter_Rat_Constraints_Bool_Exp>;
};


/** columns and relationships of "rat_types" */
export type Rat_TypesEncounter_Rat_Constraints_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Encounter_Rat_Constraints_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Encounter_Rat_Constraints_Order_By>>;
  where?: InputMaybe<Encounter_Rat_Constraints_Bool_Exp>;
};


/** columns and relationships of "rat_types" */
export type Rat_TypesRaid_ContributionsArgs = {
  distinct_on?: InputMaybe<Array<Raid_Contributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Raid_Contributions_Order_By>>;
  where?: InputMaybe<Raid_Contributions_Bool_Exp>;
};


/** columns and relationships of "rat_types" */
export type Rat_TypesRaid_Contributions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Raid_Contributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Raid_Contributions_Order_By>>;
  where?: InputMaybe<Raid_Contributions_Bool_Exp>;
};

/** aggregated selection of "rat_types" */
export type Rat_Types_Aggregate = {
  __typename?: 'rat_types_aggregate';
  aggregate?: Maybe<Rat_Types_Aggregate_Fields>;
  nodes: Array<Rat_Types>;
};

/** aggregate fields of "rat_types" */
export type Rat_Types_Aggregate_Fields = {
  __typename?: 'rat_types_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Rat_Types_Max_Fields>;
  min?: Maybe<Rat_Types_Min_Fields>;
};


/** aggregate fields of "rat_types" */
export type Rat_Types_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rat_Types_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "rat_types". All fields are combined with a logical 'AND'. */
export type Rat_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Rat_Types_Bool_Exp>>;
  _not?: InputMaybe<Rat_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Rat_Types_Bool_Exp>>;
  encounter_rat_constraints?: InputMaybe<Encounter_Rat_Constraints_Bool_Exp>;
  raid_contributions?: InputMaybe<Raid_Contributions_Bool_Exp>;
  rat_type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "rat_types" */
export enum Rat_Types_Constraint {
  /** unique or primary key constraint */
  RatTypesPkey = 'rat_types_pkey'
}

export enum Rat_Types_Enum {
  Lab = 'lab',
  Pack = 'pack',
  Pet = 'pet',
  Street = 'street'
}

/** Boolean expression to compare columns of type "rat_types_enum". All fields are combined with logical 'AND'. */
export type Rat_Types_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Rat_Types_Enum>;
  _in?: InputMaybe<Array<Rat_Types_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Rat_Types_Enum>;
  _nin?: InputMaybe<Array<Rat_Types_Enum>>;
};

/** input type for inserting data into table "rat_types" */
export type Rat_Types_Insert_Input = {
  encounter_rat_constraints?: InputMaybe<Encounter_Rat_Constraints_Arr_Rel_Insert_Input>;
  raid_contributions?: InputMaybe<Raid_Contributions_Arr_Rel_Insert_Input>;
  rat_type?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Rat_Types_Max_Fields = {
  __typename?: 'rat_types_max_fields';
  rat_type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Rat_Types_Min_Fields = {
  __typename?: 'rat_types_min_fields';
  rat_type?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "rat_types" */
export type Rat_Types_Mutation_Response = {
  __typename?: 'rat_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rat_Types>;
};

/** input type for inserting object relation for remote table "rat_types" */
export type Rat_Types_Obj_Rel_Insert_Input = {
  data: Rat_Types_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Rat_Types_On_Conflict>;
};

/** on conflict condition type for table "rat_types" */
export type Rat_Types_On_Conflict = {
  constraint: Rat_Types_Constraint;
  update_columns?: Array<Rat_Types_Update_Column>;
  where?: InputMaybe<Rat_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "rat_types". */
export type Rat_Types_Order_By = {
  encounter_rat_constraints_aggregate?: InputMaybe<Encounter_Rat_Constraints_Aggregate_Order_By>;
  raid_contributions_aggregate?: InputMaybe<Raid_Contributions_Aggregate_Order_By>;
  rat_type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rat_types */
export type Rat_Types_Pk_Columns_Input = {
  rat_type: Scalars['String'];
};

/** select columns of table "rat_types" */
export enum Rat_Types_Select_Column {
  /** column name */
  RatType = 'rat_type'
}

/** input type for updating data in table "rat_types" */
export type Rat_Types_Set_Input = {
  rat_type?: InputMaybe<Scalars['String']>;
};

/** update columns of table "rat_types" */
export enum Rat_Types_Update_Column {
  /** column name */
  RatType = 'rat_type'
}

/** columns and relationships of "rattributes" */
export type Rattributes = {
  __typename?: 'rattributes';
  rattribute: Scalars['String'];
};

/** aggregated selection of "rattributes" */
export type Rattributes_Aggregate = {
  __typename?: 'rattributes_aggregate';
  aggregate?: Maybe<Rattributes_Aggregate_Fields>;
  nodes: Array<Rattributes>;
};

/** aggregate fields of "rattributes" */
export type Rattributes_Aggregate_Fields = {
  __typename?: 'rattributes_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Rattributes_Max_Fields>;
  min?: Maybe<Rattributes_Min_Fields>;
};


/** aggregate fields of "rattributes" */
export type Rattributes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rattributes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "rattributes". All fields are combined with a logical 'AND'. */
export type Rattributes_Bool_Exp = {
  _and?: InputMaybe<Array<Rattributes_Bool_Exp>>;
  _not?: InputMaybe<Rattributes_Bool_Exp>;
  _or?: InputMaybe<Array<Rattributes_Bool_Exp>>;
  rattribute?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "rattributes" */
export enum Rattributes_Constraint {
  /** unique or primary key constraint */
  RattributesPkey = 'rattributes_pkey'
}

export enum Rattributes_Enum {
  Cunning = 'cunning',
  Cuteness = 'cuteness',
  Rattitude = 'rattitude'
}

/** Boolean expression to compare columns of type "rattributes_enum". All fields are combined with logical 'AND'. */
export type Rattributes_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Rattributes_Enum>;
  _in?: InputMaybe<Array<Rattributes_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Rattributes_Enum>;
  _nin?: InputMaybe<Array<Rattributes_Enum>>;
};

/** input type for inserting data into table "rattributes" */
export type Rattributes_Insert_Input = {
  rattribute?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Rattributes_Max_Fields = {
  __typename?: 'rattributes_max_fields';
  rattribute?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Rattributes_Min_Fields = {
  __typename?: 'rattributes_min_fields';
  rattribute?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "rattributes" */
export type Rattributes_Mutation_Response = {
  __typename?: 'rattributes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rattributes>;
};

/** input type for inserting object relation for remote table "rattributes" */
export type Rattributes_Obj_Rel_Insert_Input = {
  data: Rattributes_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Rattributes_On_Conflict>;
};

/** on conflict condition type for table "rattributes" */
export type Rattributes_On_Conflict = {
  constraint: Rattributes_Constraint;
  update_columns?: Array<Rattributes_Update_Column>;
  where?: InputMaybe<Rattributes_Bool_Exp>;
};

/** Ordering options when selecting data from "rattributes". */
export type Rattributes_Order_By = {
  rattribute?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rattributes */
export type Rattributes_Pk_Columns_Input = {
  rattribute: Scalars['String'];
};

/** select columns of table "rattributes" */
export enum Rattributes_Select_Column {
  /** column name */
  Rattribute = 'rattribute'
}

/** input type for updating data in table "rattributes" */
export type Rattributes_Set_Input = {
  rattribute?: InputMaybe<Scalars['String']>;
};

/** update columns of table "rattributes" */
export enum Rattributes_Update_Column {
  /** column name */
  Rattribute = 'rattribute'
}

/** columns and relationships of "rewards" */
export type Rewards = {
  __typename?: 'rewards';
  closet_tokens?: Maybe<Scalars['jsonb']>;
  /** An array relationship */
  encounters: Array<Encounters>;
  /** An aggregate relationship */
  encounters_aggregate: Encounters_Aggregate;
  /** An array relationship */
  gauntlets: Array<Gauntlets>;
  /** An aggregate relationship */
  gauntlets_aggregate: Gauntlets_Aggregate;
  id: Scalars['Int'];
  /** An array relationship */
  raids: Array<Raids>;
  /** An aggregate relationship */
  raids_aggregate: Raids_Aggregate;
  tokens: Scalars['Int'];
};


/** columns and relationships of "rewards" */
export type RewardsCloset_TokensArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "rewards" */
export type RewardsEncountersArgs = {
  distinct_on?: InputMaybe<Array<Encounters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Encounters_Order_By>>;
  where?: InputMaybe<Encounters_Bool_Exp>;
};


/** columns and relationships of "rewards" */
export type RewardsEncounters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Encounters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Encounters_Order_By>>;
  where?: InputMaybe<Encounters_Bool_Exp>;
};


/** columns and relationships of "rewards" */
export type RewardsGauntletsArgs = {
  distinct_on?: InputMaybe<Array<Gauntlets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gauntlets_Order_By>>;
  where?: InputMaybe<Gauntlets_Bool_Exp>;
};


/** columns and relationships of "rewards" */
export type RewardsGauntlets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gauntlets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gauntlets_Order_By>>;
  where?: InputMaybe<Gauntlets_Bool_Exp>;
};


/** columns and relationships of "rewards" */
export type RewardsRaidsArgs = {
  distinct_on?: InputMaybe<Array<Raids_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Raids_Order_By>>;
  where?: InputMaybe<Raids_Bool_Exp>;
};


/** columns and relationships of "rewards" */
export type RewardsRaids_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Raids_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Raids_Order_By>>;
  where?: InputMaybe<Raids_Bool_Exp>;
};

/** aggregated selection of "rewards" */
export type Rewards_Aggregate = {
  __typename?: 'rewards_aggregate';
  aggregate?: Maybe<Rewards_Aggregate_Fields>;
  nodes: Array<Rewards>;
};

/** aggregate fields of "rewards" */
export type Rewards_Aggregate_Fields = {
  __typename?: 'rewards_aggregate_fields';
  avg?: Maybe<Rewards_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Rewards_Max_Fields>;
  min?: Maybe<Rewards_Min_Fields>;
  stddev?: Maybe<Rewards_Stddev_Fields>;
  stddev_pop?: Maybe<Rewards_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rewards_Stddev_Samp_Fields>;
  sum?: Maybe<Rewards_Sum_Fields>;
  var_pop?: Maybe<Rewards_Var_Pop_Fields>;
  var_samp?: Maybe<Rewards_Var_Samp_Fields>;
  variance?: Maybe<Rewards_Variance_Fields>;
};


/** aggregate fields of "rewards" */
export type Rewards_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rewards_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Rewards_Append_Input = {
  closet_tokens?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Rewards_Avg_Fields = {
  __typename?: 'rewards_avg_fields';
  id?: Maybe<Scalars['Float']>;
  tokens?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "rewards". All fields are combined with a logical 'AND'. */
export type Rewards_Bool_Exp = {
  _and?: InputMaybe<Array<Rewards_Bool_Exp>>;
  _not?: InputMaybe<Rewards_Bool_Exp>;
  _or?: InputMaybe<Array<Rewards_Bool_Exp>>;
  closet_tokens?: InputMaybe<Jsonb_Comparison_Exp>;
  encounters?: InputMaybe<Encounters_Bool_Exp>;
  gauntlets?: InputMaybe<Gauntlets_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  raids?: InputMaybe<Raids_Bool_Exp>;
  tokens?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "rewards" */
export enum Rewards_Constraint {
  /** unique or primary key constraint */
  RewardsPkey = 'rewards_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Rewards_Delete_At_Path_Input = {
  closet_tokens?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Rewards_Delete_Elem_Input = {
  closet_tokens?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Rewards_Delete_Key_Input = {
  closet_tokens?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "rewards" */
export type Rewards_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  tokens?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "rewards" */
export type Rewards_Insert_Input = {
  closet_tokens?: InputMaybe<Scalars['jsonb']>;
  encounters?: InputMaybe<Encounters_Arr_Rel_Insert_Input>;
  gauntlets?: InputMaybe<Gauntlets_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']>;
  raids?: InputMaybe<Raids_Arr_Rel_Insert_Input>;
  tokens?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Rewards_Max_Fields = {
  __typename?: 'rewards_max_fields';
  id?: Maybe<Scalars['Int']>;
  tokens?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Rewards_Min_Fields = {
  __typename?: 'rewards_min_fields';
  id?: Maybe<Scalars['Int']>;
  tokens?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "rewards" */
export type Rewards_Mutation_Response = {
  __typename?: 'rewards_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rewards>;
};

/** input type for inserting object relation for remote table "rewards" */
export type Rewards_Obj_Rel_Insert_Input = {
  data: Rewards_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Rewards_On_Conflict>;
};

/** on conflict condition type for table "rewards" */
export type Rewards_On_Conflict = {
  constraint: Rewards_Constraint;
  update_columns?: Array<Rewards_Update_Column>;
  where?: InputMaybe<Rewards_Bool_Exp>;
};

/** Ordering options when selecting data from "rewards". */
export type Rewards_Order_By = {
  closet_tokens?: InputMaybe<Order_By>;
  encounters_aggregate?: InputMaybe<Encounters_Aggregate_Order_By>;
  gauntlets_aggregate?: InputMaybe<Gauntlets_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  raids_aggregate?: InputMaybe<Raids_Aggregate_Order_By>;
  tokens?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rewards */
export type Rewards_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Rewards_Prepend_Input = {
  closet_tokens?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "rewards" */
export enum Rewards_Select_Column {
  /** column name */
  ClosetTokens = 'closet_tokens',
  /** column name */
  Id = 'id',
  /** column name */
  Tokens = 'tokens'
}

/** input type for updating data in table "rewards" */
export type Rewards_Set_Input = {
  closet_tokens?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['Int']>;
  tokens?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Rewards_Stddev_Fields = {
  __typename?: 'rewards_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  tokens?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Rewards_Stddev_Pop_Fields = {
  __typename?: 'rewards_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  tokens?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Rewards_Stddev_Samp_Fields = {
  __typename?: 'rewards_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  tokens?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Rewards_Sum_Fields = {
  __typename?: 'rewards_sum_fields';
  id?: Maybe<Scalars['Int']>;
  tokens?: Maybe<Scalars['Int']>;
};

/** update columns of table "rewards" */
export enum Rewards_Update_Column {
  /** column name */
  ClosetTokens = 'closet_tokens',
  /** column name */
  Id = 'id',
  /** column name */
  Tokens = 'tokens'
}

/** aggregate var_pop on columns */
export type Rewards_Var_Pop_Fields = {
  __typename?: 'rewards_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  tokens?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Rewards_Var_Samp_Fields = {
  __typename?: 'rewards_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  tokens?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Rewards_Variance_Fields = {
  __typename?: 'rewards_variance_fields';
  id?: Maybe<Scalars['Float']>;
  tokens?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "solo_encounter_results" */
export type Solo_Encounter_Results = {
  __typename?: 'solo_encounter_results';
  completed_timestamp: Scalars['timestamptz'];
  /** An object relationship */
  encounter: Encounters;
  encounter_id: Scalars['Int'];
  id: Scalars['bigint'];
  /** An object relationship */
  player: Players;
  player_id: Scalars['String'];
  result: Scalars['Boolean'];
};

/** aggregated selection of "solo_encounter_results" */
export type Solo_Encounter_Results_Aggregate = {
  __typename?: 'solo_encounter_results_aggregate';
  aggregate?: Maybe<Solo_Encounter_Results_Aggregate_Fields>;
  nodes: Array<Solo_Encounter_Results>;
};

/** aggregate fields of "solo_encounter_results" */
export type Solo_Encounter_Results_Aggregate_Fields = {
  __typename?: 'solo_encounter_results_aggregate_fields';
  avg?: Maybe<Solo_Encounter_Results_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Solo_Encounter_Results_Max_Fields>;
  min?: Maybe<Solo_Encounter_Results_Min_Fields>;
  stddev?: Maybe<Solo_Encounter_Results_Stddev_Fields>;
  stddev_pop?: Maybe<Solo_Encounter_Results_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Solo_Encounter_Results_Stddev_Samp_Fields>;
  sum?: Maybe<Solo_Encounter_Results_Sum_Fields>;
  var_pop?: Maybe<Solo_Encounter_Results_Var_Pop_Fields>;
  var_samp?: Maybe<Solo_Encounter_Results_Var_Samp_Fields>;
  variance?: Maybe<Solo_Encounter_Results_Variance_Fields>;
};


/** aggregate fields of "solo_encounter_results" */
export type Solo_Encounter_Results_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Solo_Encounter_Results_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "solo_encounter_results" */
export type Solo_Encounter_Results_Aggregate_Order_By = {
  avg?: InputMaybe<Solo_Encounter_Results_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Solo_Encounter_Results_Max_Order_By>;
  min?: InputMaybe<Solo_Encounter_Results_Min_Order_By>;
  stddev?: InputMaybe<Solo_Encounter_Results_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Solo_Encounter_Results_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Solo_Encounter_Results_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Solo_Encounter_Results_Sum_Order_By>;
  var_pop?: InputMaybe<Solo_Encounter_Results_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Solo_Encounter_Results_Var_Samp_Order_By>;
  variance?: InputMaybe<Solo_Encounter_Results_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "solo_encounter_results" */
export type Solo_Encounter_Results_Arr_Rel_Insert_Input = {
  data: Array<Solo_Encounter_Results_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Solo_Encounter_Results_On_Conflict>;
};

/** aggregate avg on columns */
export type Solo_Encounter_Results_Avg_Fields = {
  __typename?: 'solo_encounter_results_avg_fields';
  encounter_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "solo_encounter_results" */
export type Solo_Encounter_Results_Avg_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "solo_encounter_results". All fields are combined with a logical 'AND'. */
export type Solo_Encounter_Results_Bool_Exp = {
  _and?: InputMaybe<Array<Solo_Encounter_Results_Bool_Exp>>;
  _not?: InputMaybe<Solo_Encounter_Results_Bool_Exp>;
  _or?: InputMaybe<Array<Solo_Encounter_Results_Bool_Exp>>;
  completed_timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  encounter?: InputMaybe<Encounters_Bool_Exp>;
  encounter_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  player?: InputMaybe<Players_Bool_Exp>;
  player_id?: InputMaybe<String_Comparison_Exp>;
  result?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "solo_encounter_results" */
export enum Solo_Encounter_Results_Constraint {
  /** unique or primary key constraint */
  SoloEncounterResultsPkey = 'solo_encounter_results_pkey'
}

/** input type for incrementing numeric columns in table "solo_encounter_results" */
export type Solo_Encounter_Results_Inc_Input = {
  encounter_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "solo_encounter_results" */
export type Solo_Encounter_Results_Insert_Input = {
  completed_timestamp?: InputMaybe<Scalars['timestamptz']>;
  encounter?: InputMaybe<Encounters_Obj_Rel_Insert_Input>;
  encounter_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  player?: InputMaybe<Players_Obj_Rel_Insert_Input>;
  player_id?: InputMaybe<Scalars['String']>;
  result?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Solo_Encounter_Results_Max_Fields = {
  __typename?: 'solo_encounter_results_max_fields';
  completed_timestamp?: Maybe<Scalars['timestamptz']>;
  encounter_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  player_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "solo_encounter_results" */
export type Solo_Encounter_Results_Max_Order_By = {
  completed_timestamp?: InputMaybe<Order_By>;
  encounter_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Solo_Encounter_Results_Min_Fields = {
  __typename?: 'solo_encounter_results_min_fields';
  completed_timestamp?: Maybe<Scalars['timestamptz']>;
  encounter_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  player_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "solo_encounter_results" */
export type Solo_Encounter_Results_Min_Order_By = {
  completed_timestamp?: InputMaybe<Order_By>;
  encounter_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "solo_encounter_results" */
export type Solo_Encounter_Results_Mutation_Response = {
  __typename?: 'solo_encounter_results_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Solo_Encounter_Results>;
};

/** on conflict condition type for table "solo_encounter_results" */
export type Solo_Encounter_Results_On_Conflict = {
  constraint: Solo_Encounter_Results_Constraint;
  update_columns?: Array<Solo_Encounter_Results_Update_Column>;
  where?: InputMaybe<Solo_Encounter_Results_Bool_Exp>;
};

/** Ordering options when selecting data from "solo_encounter_results". */
export type Solo_Encounter_Results_Order_By = {
  completed_timestamp?: InputMaybe<Order_By>;
  encounter?: InputMaybe<Encounters_Order_By>;
  encounter_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  player?: InputMaybe<Players_Order_By>;
  player_id?: InputMaybe<Order_By>;
  result?: InputMaybe<Order_By>;
};

/** primary key columns input for table: solo_encounter_results */
export type Solo_Encounter_Results_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "solo_encounter_results" */
export enum Solo_Encounter_Results_Select_Column {
  /** column name */
  CompletedTimestamp = 'completed_timestamp',
  /** column name */
  EncounterId = 'encounter_id',
  /** column name */
  Id = 'id',
  /** column name */
  PlayerId = 'player_id',
  /** column name */
  Result = 'result'
}

/** input type for updating data in table "solo_encounter_results" */
export type Solo_Encounter_Results_Set_Input = {
  completed_timestamp?: InputMaybe<Scalars['timestamptz']>;
  encounter_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  player_id?: InputMaybe<Scalars['String']>;
  result?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Solo_Encounter_Results_Stddev_Fields = {
  __typename?: 'solo_encounter_results_stddev_fields';
  encounter_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "solo_encounter_results" */
export type Solo_Encounter_Results_Stddev_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Solo_Encounter_Results_Stddev_Pop_Fields = {
  __typename?: 'solo_encounter_results_stddev_pop_fields';
  encounter_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "solo_encounter_results" */
export type Solo_Encounter_Results_Stddev_Pop_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Solo_Encounter_Results_Stddev_Samp_Fields = {
  __typename?: 'solo_encounter_results_stddev_samp_fields';
  encounter_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "solo_encounter_results" */
export type Solo_Encounter_Results_Stddev_Samp_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Solo_Encounter_Results_Sum_Fields = {
  __typename?: 'solo_encounter_results_sum_fields';
  encounter_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "solo_encounter_results" */
export type Solo_Encounter_Results_Sum_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "solo_encounter_results" */
export enum Solo_Encounter_Results_Update_Column {
  /** column name */
  CompletedTimestamp = 'completed_timestamp',
  /** column name */
  EncounterId = 'encounter_id',
  /** column name */
  Id = 'id',
  /** column name */
  PlayerId = 'player_id',
  /** column name */
  Result = 'result'
}

/** aggregate var_pop on columns */
export type Solo_Encounter_Results_Var_Pop_Fields = {
  __typename?: 'solo_encounter_results_var_pop_fields';
  encounter_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "solo_encounter_results" */
export type Solo_Encounter_Results_Var_Pop_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Solo_Encounter_Results_Var_Samp_Fields = {
  __typename?: 'solo_encounter_results_var_samp_fields';
  encounter_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "solo_encounter_results" */
export type Solo_Encounter_Results_Var_Samp_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Solo_Encounter_Results_Variance_Fields = {
  __typename?: 'solo_encounter_results_variance_fields';
  encounter_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "solo_encounter_results" */
export type Solo_Encounter_Results_Variance_Order_By = {
  encounter_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  encounter_rat_constraints: Array<Encounter_Rat_Constraints>;
  /** An aggregate relationship */
  encounter_rat_constraints_aggregate: Encounter_Rat_Constraints_Aggregate;
  /** fetch data from the table: "encounter_rat_constraints" using primary key columns */
  encounter_rat_constraints_by_pk?: Maybe<Encounter_Rat_Constraints>;
  /** fetch data from the table: "encounter_resistance" */
  encounter_resistance: Array<Encounter_Resistance>;
  /** fetch aggregated fields from the table: "encounter_resistance" */
  encounter_resistance_aggregate: Encounter_Resistance_Aggregate;
  /** fetch data from the table: "encounter_resistance" using primary key columns */
  encounter_resistance_by_pk?: Maybe<Encounter_Resistance>;
  /** fetch data from the table: "encounter_types" */
  encounter_types: Array<Encounter_Types>;
  /** fetch aggregated fields from the table: "encounter_types" */
  encounter_types_aggregate: Encounter_Types_Aggregate;
  /** fetch data from the table: "encounter_types" using primary key columns */
  encounter_types_by_pk?: Maybe<Encounter_Types>;
  /** fetch data from the table: "encounter_weakness" */
  encounter_weakness: Array<Encounter_Weakness>;
  /** fetch aggregated fields from the table: "encounter_weakness" */
  encounter_weakness_aggregate: Encounter_Weakness_Aggregate;
  /** fetch data from the table: "encounter_weakness" using primary key columns */
  encounter_weakness_by_pk?: Maybe<Encounter_Weakness>;
  /** An array relationship */
  encounters: Array<Encounters>;
  /** An aggregate relationship */
  encounters_aggregate: Encounters_Aggregate;
  /** fetch data from the table: "encounters" using primary key columns */
  encounters_by_pk?: Maybe<Encounters>;
  /** fetch data from the table: "gauntlet_attempts" */
  gauntlet_attempts: Array<Gauntlet_Attempts>;
  /** An aggregate relationship */
  gauntlet_attempts_aggregate: Gauntlet_Attempts_Aggregate;
  /** fetch data from the table: "gauntlet_attempts" using primary key columns */
  gauntlet_attempts_by_pk?: Maybe<Gauntlet_Attempts>;
  /** An array relationship */
  gauntlet_encounters: Array<Gauntlet_Encounters>;
  /** An aggregate relationship */
  gauntlet_encounters_aggregate: Gauntlet_Encounters_Aggregate;
  /** fetch data from the table: "gauntlet_encounters" using primary key columns */
  gauntlet_encounters_by_pk?: Maybe<Gauntlet_Encounters>;
  /** An array relationship */
  gauntlets: Array<Gauntlets>;
  /** An aggregate relationship */
  gauntlets_aggregate: Gauntlets_Aggregate;
  /** fetch data from the table: "gauntlets" using primary key columns */
  gauntlets_by_pk?: Maybe<Gauntlets>;
  /** fetch data from the table: "players" */
  players: Array<Players>;
  /** fetch aggregated fields from the table: "players" */
  players_aggregate: Players_Aggregate;
  /** fetch data from the table: "players" using primary key columns */
  players_by_pk?: Maybe<Players>;
  /** An array relationship */
  raid_contributions: Array<Raid_Contributions>;
  /** An aggregate relationship */
  raid_contributions_aggregate: Raid_Contributions_Aggregate;
  /** fetch data from the table: "raid_contributions" using primary key columns */
  raid_contributions_by_pk?: Maybe<Raid_Contributions>;
  /** An array relationship */
  raids: Array<Raids>;
  /** An aggregate relationship */
  raids_aggregate: Raids_Aggregate;
  /** fetch data from the table: "raids" using primary key columns */
  raids_by_pk?: Maybe<Raids>;
  /** fetch data from the table: "rat_types" */
  rat_types: Array<Rat_Types>;
  /** fetch aggregated fields from the table: "rat_types" */
  rat_types_aggregate: Rat_Types_Aggregate;
  /** fetch data from the table: "rat_types" using primary key columns */
  rat_types_by_pk?: Maybe<Rat_Types>;
  /** fetch data from the table: "rattributes" */
  rattributes: Array<Rattributes>;
  /** fetch aggregated fields from the table: "rattributes" */
  rattributes_aggregate: Rattributes_Aggregate;
  /** fetch data from the table: "rattributes" using primary key columns */
  rattributes_by_pk?: Maybe<Rattributes>;
  /** fetch data from the table: "rewards" */
  rewards: Array<Rewards>;
  /** fetch aggregated fields from the table: "rewards" */
  rewards_aggregate: Rewards_Aggregate;
  /** fetch data from the table: "rewards" using primary key columns */
  rewards_by_pk?: Maybe<Rewards>;
  /** An array relationship */
  solo_encounter_results: Array<Solo_Encounter_Results>;
  /** An aggregate relationship */
  solo_encounter_results_aggregate: Solo_Encounter_Results_Aggregate;
  /** fetch data from the table: "solo_encounter_results" using primary key columns */
  solo_encounter_results_by_pk?: Maybe<Solo_Encounter_Results>;
};


export type Subscription_RootEncounter_Rat_ConstraintsArgs = {
  distinct_on?: InputMaybe<Array<Encounter_Rat_Constraints_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Encounter_Rat_Constraints_Order_By>>;
  where?: InputMaybe<Encounter_Rat_Constraints_Bool_Exp>;
};


export type Subscription_RootEncounter_Rat_Constraints_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Encounter_Rat_Constraints_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Encounter_Rat_Constraints_Order_By>>;
  where?: InputMaybe<Encounter_Rat_Constraints_Bool_Exp>;
};


export type Subscription_RootEncounter_Rat_Constraints_By_PkArgs = {
  encounter_id: Scalars['Int'];
  rat_type: Rat_Types_Enum;
};


export type Subscription_RootEncounter_ResistanceArgs = {
  distinct_on?: InputMaybe<Array<Encounter_Resistance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Encounter_Resistance_Order_By>>;
  where?: InputMaybe<Encounter_Resistance_Bool_Exp>;
};


export type Subscription_RootEncounter_Resistance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Encounter_Resistance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Encounter_Resistance_Order_By>>;
  where?: InputMaybe<Encounter_Resistance_Bool_Exp>;
};


export type Subscription_RootEncounter_Resistance_By_PkArgs = {
  encounter_id: Scalars['Int'];
  resistance: Rattributes_Enum;
};


export type Subscription_RootEncounter_TypesArgs = {
  distinct_on?: InputMaybe<Array<Encounter_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Encounter_Types_Order_By>>;
  where?: InputMaybe<Encounter_Types_Bool_Exp>;
};


export type Subscription_RootEncounter_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Encounter_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Encounter_Types_Order_By>>;
  where?: InputMaybe<Encounter_Types_Bool_Exp>;
};


export type Subscription_RootEncounter_Types_By_PkArgs = {
  encounter_type: Scalars['String'];
};


export type Subscription_RootEncounter_WeaknessArgs = {
  distinct_on?: InputMaybe<Array<Encounter_Weakness_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Encounter_Weakness_Order_By>>;
  where?: InputMaybe<Encounter_Weakness_Bool_Exp>;
};


export type Subscription_RootEncounter_Weakness_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Encounter_Weakness_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Encounter_Weakness_Order_By>>;
  where?: InputMaybe<Encounter_Weakness_Bool_Exp>;
};


export type Subscription_RootEncounter_Weakness_By_PkArgs = {
  encounter_id: Scalars['Int'];
  weakness: Rattributes_Enum;
};


export type Subscription_RootEncountersArgs = {
  distinct_on?: InputMaybe<Array<Encounters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Encounters_Order_By>>;
  where?: InputMaybe<Encounters_Bool_Exp>;
};


export type Subscription_RootEncounters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Encounters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Encounters_Order_By>>;
  where?: InputMaybe<Encounters_Bool_Exp>;
};


export type Subscription_RootEncounters_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootGauntlet_AttemptsArgs = {
  distinct_on?: InputMaybe<Array<Gauntlet_Attempts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gauntlet_Attempts_Order_By>>;
  where?: InputMaybe<Gauntlet_Attempts_Bool_Exp>;
};


export type Subscription_RootGauntlet_Attempts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gauntlet_Attempts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gauntlet_Attempts_Order_By>>;
  where?: InputMaybe<Gauntlet_Attempts_Bool_Exp>;
};


export type Subscription_RootGauntlet_Attempts_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootGauntlet_EncountersArgs = {
  distinct_on?: InputMaybe<Array<Gauntlet_Encounters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gauntlet_Encounters_Order_By>>;
  where?: InputMaybe<Gauntlet_Encounters_Bool_Exp>;
};


export type Subscription_RootGauntlet_Encounters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gauntlet_Encounters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gauntlet_Encounters_Order_By>>;
  where?: InputMaybe<Gauntlet_Encounters_Bool_Exp>;
};


export type Subscription_RootGauntlet_Encounters_By_PkArgs = {
  encounter_id: Scalars['Int'];
  gauntlet_id: Scalars['Int'];
  position: Scalars['Int'];
};


export type Subscription_RootGauntletsArgs = {
  distinct_on?: InputMaybe<Array<Gauntlets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gauntlets_Order_By>>;
  where?: InputMaybe<Gauntlets_Bool_Exp>;
};


export type Subscription_RootGauntlets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gauntlets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gauntlets_Order_By>>;
  where?: InputMaybe<Gauntlets_Bool_Exp>;
};


export type Subscription_RootGauntlets_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPlayersArgs = {
  distinct_on?: InputMaybe<Array<Players_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Players_Order_By>>;
  where?: InputMaybe<Players_Bool_Exp>;
};


export type Subscription_RootPlayers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Players_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Players_Order_By>>;
  where?: InputMaybe<Players_Bool_Exp>;
};


export type Subscription_RootPlayers_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRaid_ContributionsArgs = {
  distinct_on?: InputMaybe<Array<Raid_Contributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Raid_Contributions_Order_By>>;
  where?: InputMaybe<Raid_Contributions_Bool_Exp>;
};


export type Subscription_RootRaid_Contributions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Raid_Contributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Raid_Contributions_Order_By>>;
  where?: InputMaybe<Raid_Contributions_Bool_Exp>;
};


export type Subscription_RootRaid_Contributions_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootRaidsArgs = {
  distinct_on?: InputMaybe<Array<Raids_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Raids_Order_By>>;
  where?: InputMaybe<Raids_Bool_Exp>;
};


export type Subscription_RootRaids_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Raids_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Raids_Order_By>>;
  where?: InputMaybe<Raids_Bool_Exp>;
};


export type Subscription_RootRaids_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootRat_TypesArgs = {
  distinct_on?: InputMaybe<Array<Rat_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rat_Types_Order_By>>;
  where?: InputMaybe<Rat_Types_Bool_Exp>;
};


export type Subscription_RootRat_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rat_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rat_Types_Order_By>>;
  where?: InputMaybe<Rat_Types_Bool_Exp>;
};


export type Subscription_RootRat_Types_By_PkArgs = {
  rat_type: Scalars['String'];
};


export type Subscription_RootRattributesArgs = {
  distinct_on?: InputMaybe<Array<Rattributes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rattributes_Order_By>>;
  where?: InputMaybe<Rattributes_Bool_Exp>;
};


export type Subscription_RootRattributes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rattributes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rattributes_Order_By>>;
  where?: InputMaybe<Rattributes_Bool_Exp>;
};


export type Subscription_RootRattributes_By_PkArgs = {
  rattribute: Scalars['String'];
};


export type Subscription_RootRewardsArgs = {
  distinct_on?: InputMaybe<Array<Rewards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rewards_Order_By>>;
  where?: InputMaybe<Rewards_Bool_Exp>;
};


export type Subscription_RootRewards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rewards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rewards_Order_By>>;
  where?: InputMaybe<Rewards_Bool_Exp>;
};


export type Subscription_RootRewards_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSolo_Encounter_ResultsArgs = {
  distinct_on?: InputMaybe<Array<Solo_Encounter_Results_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Solo_Encounter_Results_Order_By>>;
  where?: InputMaybe<Solo_Encounter_Results_Bool_Exp>;
};


export type Subscription_RootSolo_Encounter_Results_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Solo_Encounter_Results_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Solo_Encounter_Results_Order_By>>;
  where?: InputMaybe<Solo_Encounter_Results_Bool_Exp>;
};


export type Subscription_RootSolo_Encounter_Results_By_PkArgs = {
  id: Scalars['bigint'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

export type LoginMutationVariables = Exact<{
  wallet: Scalars['String'];
  msg: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'mutation_root', login?: { __typename?: 'LoginOutput', authorized: boolean } | null | undefined };

export type GetActiveEncountersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetActiveEncountersQuery = { __typename?: 'query_root', encounters: Array<{ __typename?: 'encounters', id: number }> };

export type GetCurrentPlayerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentPlayerQuery = { __typename?: 'query_root', players: Array<{ __typename?: 'players', id: string }> };


export const LoginDocument = gql`
    mutation Login($wallet: String!, $msg: String!) {
  login(wallet: $wallet, msg: $msg) {
    authorized
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      wallet: // value for 'wallet'
 *      msg: // value for 'msg'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const GetActiveEncountersDocument = gql`
    query GetActiveEncounters {
  encounters(where: {active: {_eq: true}}) {
    id
  }
}
    `;

/**
 * __useGetActiveEncountersQuery__
 *
 * To run a query within a React component, call `useGetActiveEncountersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetActiveEncountersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetActiveEncountersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetActiveEncountersQuery(baseOptions?: Apollo.QueryHookOptions<GetActiveEncountersQuery, GetActiveEncountersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetActiveEncountersQuery, GetActiveEncountersQueryVariables>(GetActiveEncountersDocument, options);
      }
export function useGetActiveEncountersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetActiveEncountersQuery, GetActiveEncountersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetActiveEncountersQuery, GetActiveEncountersQueryVariables>(GetActiveEncountersDocument, options);
        }
export type GetActiveEncountersQueryHookResult = ReturnType<typeof useGetActiveEncountersQuery>;
export type GetActiveEncountersLazyQueryHookResult = ReturnType<typeof useGetActiveEncountersLazyQuery>;
export type GetActiveEncountersQueryResult = Apollo.QueryResult<GetActiveEncountersQuery, GetActiveEncountersQueryVariables>;
export const GetCurrentPlayerDocument = gql`
    query GetCurrentPlayer {
  players {
    id
  }
}
    `;

/**
 * __useGetCurrentPlayerQuery__
 *
 * To run a query within a React component, call `useGetCurrentPlayerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentPlayerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentPlayerQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentPlayerQuery(baseOptions?: Apollo.QueryHookOptions<GetCurrentPlayerQuery, GetCurrentPlayerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCurrentPlayerQuery, GetCurrentPlayerQueryVariables>(GetCurrentPlayerDocument, options);
      }
export function useGetCurrentPlayerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentPlayerQuery, GetCurrentPlayerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCurrentPlayerQuery, GetCurrentPlayerQueryVariables>(GetCurrentPlayerDocument, options);
        }
export type GetCurrentPlayerQueryHookResult = ReturnType<typeof useGetCurrentPlayerQuery>;
export type GetCurrentPlayerLazyQueryHookResult = ReturnType<typeof useGetCurrentPlayerLazyQuery>;
export type GetCurrentPlayerQueryResult = Apollo.QueryResult<GetCurrentPlayerQuery, GetCurrentPlayerQueryVariables>;
