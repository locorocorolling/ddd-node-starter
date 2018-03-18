import { User } from '../../Domain/User/User';
import * as express from 'express';

interface IRequest extends express.Request {
    user?: User
    file?: any
}