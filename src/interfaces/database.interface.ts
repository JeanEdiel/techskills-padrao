import { QueryResultRow } from 'pg';

export interface Database<T = QueryResultRow>
{
    status: boolean,
    data: T[],
    error?: Error
}
