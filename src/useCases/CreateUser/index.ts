import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreatUserUseCase";

const mailtrapMailProvider = new MailtrapMailProvider();
const postgresUsersRepository =  new PostgresUsersRepository();

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository, 
  mailtrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);;

export { createUserUseCase, createUserController };